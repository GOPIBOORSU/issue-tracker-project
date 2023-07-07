const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/db';
// mongoose.connect('url') 
const db=mongoose.connect(url)
.then(() =>  {
    console.log('Database connected successfully');
})
.catch(()  =>{
    console.log('An Error occured while connecting to database');
})
//const db=mongoose.connection;

//If any Error then Getting this Line
/*db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});*/

module.exports=db;