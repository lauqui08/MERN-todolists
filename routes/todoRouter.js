const express = require('express')
const router = express.Router();
const {auth} = require('../middlewares/auth');

//controllers
const {
    allTodo,
    createTodo,
    singleTodo,
    updateTodo,
    deleteTodo,} = require('../controllers/todoController');

//get all todo
router.get('/',allTodo);
//create todo
router.post('/',createTodo);
//get single todo
router.get('/:id',singleTodo,);
//update todo
router.patch('/:id',updateTodo);
//delete todo
router.delete('/:id',deleteTodo);


module.exports=router;