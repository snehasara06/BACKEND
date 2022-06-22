const express=require('express');
const bodyParser=require('body-parser');

const cors=require('cors');
const mongoose=require('../BACKEND/db.js');

// const { application } = require('express');
var flightController=require('./Controllers/flightController.js')
const app=express();

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.listen(8000,()=>{
    console.log('Server  started at port :8000')
});

app.use('/flightData',flightController);