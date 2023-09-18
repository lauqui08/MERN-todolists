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

UserSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password,salt);
        this.token = jwt.sign(SECRET,this.email);
    next();
});
const User = mongoose.model('User',UserSchema);
module.exports = User;