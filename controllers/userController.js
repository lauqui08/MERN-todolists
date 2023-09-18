const User = require('../models/User');
const userErrors = require('../errors/userErrors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
//get all user
const allUser = async (req,res) =>{
    try {
        const users = await User.find({});
        if(users){
            return res.status(200).json(users)
        }else{
            return res.status(500).json({message:'Unable to display users. Please try again.'})
        }
    } catch (error) {
        console.log(error);
    }
};

//create user - registration
const createUser = async (req, res) => {
    const {fullname, email, password} = req.body;

    try {
        const user = await User.create({fullname, email, password});
        const token = user.token;
        // console.log(token);
        res.cookie('userToken',token,{httpOnly:true});
        // res.redirect('/');
        res.status(200).json(user)

    } catch (error) {
        const errors = userErrors(error);
        res.status(400).json(errors);
    }

};

//get single user
const singleUser = async (req, res) => {
    const {id} = req.params;
    try {
        if(mongoose.isValidObjectId(id)){
            const user = await User.findOne({_id:id});
            if(user){
                return res.status(200).json(user);
            }else{
                return res.status(200).json({message:'User not found.'})
            }
        }else{
            return res.status(400).json({message: 'Invalid request. Please try again.'});
        }
        
    } catch (error) {
        console.log(error);
    }
};

//update user - change password
const updateUser = async (req, res) => {
    const {id} = req.params;
    const {password} = req.body;
    try {
        if(mongoose.isValidObjectId(id)){
            const hashPassword = await bcrypt.hash(password,10);
            const user = await User.findOneAndUpdate({_id:id},{password:hashPassword});

            if(user){
                //logout
                res.status(200).json({message:'Successfully changed password.'});
            }else{
                res.status(400).json({message:'Failed to change password. Please try again.'});
            }
        }else{
            return res.status(400).json({message: 'Invalid request. Please try again.'});
        }
        
        
    } catch (error) {
        console.log(error);
    }
};

//delete user
const deleteUser = async (req, res) => {
    try {
        res.send('delete user');
    } catch (error) {
        console.log(error);
    }
};

//login user
const loginRouter = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.login(email, password);
        if(req.cookies.userToken != user.token){
            res.cookie('userToken',user.token,{httpOnly:true})
        }
        res.status(200).json(user);
    } catch (error) {
        const errors = userErrors(error);
        res.status(400).json(errors);
    }
};

//logout user
const logoutRouter = async(req,res) => {
    res.cookie('userToken','',{maxAge: 0});
    res.status(200).json({message: 'Successfully logged out.'});
};

module.exports={
    allUser,
    createUser,
    singleUser,
    updateUser,
    deleteUser,
    loginRouter,
    logoutRouter};