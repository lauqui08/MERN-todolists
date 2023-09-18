const express = require('express')
const router = express.Router();
const {auth} = require('../middlewares/auth');

//controllers
const {
    allUser,
    createUser,
    singleUser,
    updateUser,
    deleteUser,
    loginRouter,
    logoutRouter} = require('../controllers/userController');

//get all user
router.get('/',auth,allUser);
//create user
router.post('/',createUser);
//get single user
router.get('/:id',auth,singleUser,);
//update user - change password
router.patch('/:id',auth,updateUser);
//delete user
router.delete('/:id',auth,deleteUser);
//login
router.post('/login',loginRouter);
//logout
router.post('/logout',auth,logoutRouter);



module.exports=router;