//step 2

const mongoose = require('mongoose');

//specifying schema for the model
var Employee = mongoose.model('Employee', {
    name: {type: String},
    position: {type: String},
    office: {type: String},
    salary: {type: Number}
});

module.exports = {Employee}; //is a constructor