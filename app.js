const express= require('express')
const cors =require('cors')
const {db} =require('./db/db');
const {readdirSync} = require('fs');
//const { route } = require('./routes/transaction');

const app=express()


require('dotenv').config();
const PORT = process.env.PORT


// md
app.use(express.json());
app.use(cors());
// routes
readdirSync('./routes').map((route => app.use('/api/v1', require('./routes/' + route))))


const server =()=>{
       db(); // databse connected to the server
        app.listen(PORT,()=> {
            console.log('listening to port:',PORT);
        })
        //console.log("your runing in the port", PORT)
} 
server()