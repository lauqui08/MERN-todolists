const mongoose = require('mongoose');
const dbCon = async(uri) => {
    try {
        await mongoose.connect(uri);
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
};
module.EXPORTS=dbCon;