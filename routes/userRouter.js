const express = require('express')
const router = express.Router();
//controllers
const {
    allUser,
    createUser,
    singleUser,
    updateUser,
    deleteUser} = require('../controllers/userController');

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


module.exports=router;