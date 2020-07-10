const express = require('express'); //step 1
const bodyParser = require('body-parser'); //step 1

const {mongoose} = require('./db.js');   //importing from db.js // step 1 
var employeeController = require('./controllers/employeeController.js'); // step 2 //importing

var app = express();
app.use(bodyParser.json());  //configuring express middleware //step 1

//starting express server
app.listen(3000, () => console.log('server started at port 3000')); // step 1

app.use('/employees', employeeController); //base url for controller //step 2