const mongoose = require('mongoose');
const moment = require('moment-timezone');

const currentDate = moment(Date.now()).tz("Asia/Manila").format();
const TodoSchema = new mongoose.Schema({
    todoTitle:{
        type:String,
        required:[true,'Please provide title for your Todo.'],
        minlength:[5,'Title must be atleast 5 characters.']
    },
    createdBy:{
        type:String,
    },
    description:{
        type:String,
        required:[true,'Please provide description for your Todo.'],
        minlength:[15,'Description must be atleast 15 characters.']
    },
    dateCreated:{
        type:String,
        default:currentDate
    },
    dateFinished:{
        type:String,
        default:currentDate
    },
    todoLabel:{
        type:String,
        required:[true,'Please select a label for your Todo.']
    },
    dueDate:{
        type:Date,
        required:[true,'Please provided due date for you Todo.']
    },
    status:{
        type:String,
        default:'Pending'
    }
    
},
{
    timestamps:{
        createdAt: 'dateCreated',
        updatedAt: 'dateFinished'
    }
});


const TodoLists = mongoose.model('Todos',TodoSchema);

module.exports = TodoLists;