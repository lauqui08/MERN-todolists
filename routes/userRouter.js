const express = require('express')
const router = express.Router();
//controllers
const {
    allUser,
    createUser,
    singleUser,
    updateUser,
    deleteUser,
    loginRouter} = require('../controllers/userController');

//get all user
router.get('/',allUser);
//create user
router.post('/',createUser);
//get single user
router.get('/:id',singleUser,);
//update user
router.patch('/:id',updateUser);
//delete user
router.delete('/:id',deleteUser);
//login
router.post('/login',loginRouter);



module.exports=router;