const Todo = require('../models/Todo');
const todoErrors = require('../errors/todoErrors');

//get all todo
const allTodo = async(req, res) => {
    try {
        const todos = await Todo.find({});
        if(todos){
            return res.status(200).json(todos);
        }else{
            return res.status(500).json({message:'Unable to load Todos, Please refresh the page or check your internet connection.'});;
        }
    } catch (error) {
        console.log(error);
    }
};

//create todo
const createTodo = async(req, res) => {
    const {createdBy, todoTitle, description, todoLabel, dueDate} = req.body;
    try {
        const todo = await Todo.create({createdBy, todoTitle, description, todoLabel, dueDate});
        if(todo){
            return res.status(200).json(todo);
        }else{
            return res.status(500).json({message:'Error creation of todo. Please try again.'});
        }
    } catch (error) {
        console.log(error);
    }
};

//get single todo
const singleTodo = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
};

//update todo
const updateTodo = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
};

//delete todo
const deleteTodo = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
};







module.exports={
    allTodo,
    createTodo,
    singleTodo,
    updateTodo,
    deleteTodo,}