//step 1
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
    if (!err)
        console.log('Mongodb connection succeeded');
    else
        console.log('error in db connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;  //exporting to index.js