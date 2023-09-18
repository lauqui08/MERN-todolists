require('dotenv').config();
const express = require('express');
const cors = require('cors');
//database connection
const dbCon = require('./db/dbCon');
//routers
const userRouter = require('./routes/userRouter');

//variables
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 8000;
const DATABASE = process.env.DATABASE;

const app = express();


//middlewares
app.use(cors());
app.use(express.json());


//routes
app.use('/api/v1/todoLists');



//start server
const start = async() => {
    try {
        await dbCon(MONGO_URI+DATABASE);
        app.listen(PORT,(error) => {
            if(error){
                console.log(error);
                return;
            }
            console.log(`Server is running on port ${PORT} ...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();