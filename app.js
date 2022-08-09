const express = require ('express');
const dotenv = require('dotenv')
const path = require('path')
const app = express();
const bodyParser = require('body-parser')

app.use(express.json());
app.use(bodyParser.json())

dotenv.config({path: './config.env'});

require ('./db/conn');
app.use('/', require('./Router/dmdRoute'));


app.listen(process.env.PORT, ()=>{
    console.log(`running on port ${process.env.PORT}`);
})