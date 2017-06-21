const mongoose = require('mongoose');
const config = require('../config/database');

// const ScheduleSchema = mongoose.Schema({
//     theClass:{
//         type:String
//     },
//     units:{
//         type:Number
//     },
//     url:{
//         type:String
//     }
// });

//A schedule consists of an object of classes
const ScheduleSchema = mongoose.Schema({
 sched:[]
});


//create the model
const Schedule = module.exports = mongoose.model('Schedule', ScheduleSchema);

module.exports.addClass = function(newClass, cb){
    newClass.save(cb);
    console.log('something  '+newClass);
}