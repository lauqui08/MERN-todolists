const User = require('../models/User');
const userErrors = require('../middlewares/userErrors');

//get all user
const allUser = async (req,res) =>{
    try {
        res.send('show all users');
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
        res.json(user);
    } catch (error) {
        // console.log(error.code);
        const errors = userErrors(error);
        res.status(400).json(errors);
    }
};

//get single user
const singleUser = async (req, res) => {
    try {
        res.send('single user');
    } catch (error) {
        console.log(error);
    }
};

//update user
const updateUser = async (req, res) => {
    try {
        res.send('update user');
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
        
    } catch (error) {
        const errors = userErrors(error);
        res.status(401).json(errors);
    }
};

module.exports={
    allUser,
    createUser,
    singleUser,
    updateUser,
    deleteUser,
    loginRouter};