const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//variables
const SECRET = process.env.SECRET;

const UserSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:[true,'Please enter your fullname']
    },
    email:{
        type:String,
        required:[true,'Please provide email address.'],
        unique:true,
        validate:[isEmail,'Please provide a valid email address.']
    },
    password:{
        type:String,
        required:[true,'Please provide email address.'],
        minlength:[6,'Provide atleast 6 characters for your password.']
    },
    token:{
        type:String
    }

});

//encrypt password and create token for the user
UserSchema.pre('save',async function(next){
        this.password = await bcrypt.hash(this.password,10);
        this.token = jwt.sign({id:this._id},SECRET);
    next();
});

//create static method for login route
UserSchema.statics.login = async function(email, password){
    const user = await this.findOne({email});
    
    if(user){
        const match = await bcrypt.compare(password,user.password);
        if(match){
            return user;
        }
        throw Error('password');
    }
    throw Error('email');
};

const User = mongoose.model('User',UserSchema);
module.exports = User;