const express = require('express'); //step 2
var router = express.Router(); ///router is used to collect all the requests //step 2
var ObjectId = require('mongoose').Types.ObjectId; //step 3 this is for to get object id from mongodb for get id function

var {Employee} = require('../models/employee'); //importing the model(schema) from employee.js

// localhost:3000/employees/   step 2
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {res.send(docs);}
        else {console.log('Error in retriving employees :' + JSON.stringify(err, undefined, 2));}
    });
});

// localhost:3000/employees/id   step 3
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.parms.id}');

    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {res.send(doc);}
        else {console.log('Error in retriving employees :' + JSON.stringify(err, undefined, 2));}
    });
});

//step 2
router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    //saving the records
    emp.save((err, docs) => {
        if (!err) {res.send(docs);}
        else {console.log('Error in employee save :' + JSON.stringify(err, undefined, 2));}
    });
});

//step 3 
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.parms.id}');

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };        
    Employee.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true}, (err, doc) => { //new: true is if that doc exists it returns true and starts update
        if (!err) {res.send(doc);}
        else {console.log('Error in employee update :' + JSON.stringify(err, undefined, 2));}
    });
});

//step 3
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.parms.id}');
      
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {res.send(doc);}
        else {console.log('Error in employee delete :' + JSON.stringify(err, undefined, 2));}
    });
});

module.exports = router;