const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/database');
const User = require('../models/user');
const Schedule = require('../models/schedule');

router.post('/addClass', (req, res, next) => {
    //this sorta works
    // let newClass = new Schedule({
    //     sched: [
    //         {
    //             content: req.body
    //         }
    //     ]
    // });

    // let currUser = ;

    let newClass = new Schedule({
        sched: [req.body  
        ]
    });

    Schedule.addClass(newClass, (err, input) => {
        if (err) {
            res.json({success: false, msg: 'failed to add class'});
            console.log('err occured');
        } else {
            res.json({success: true, msg: 'class was added'});
            // console.log(JSON.stringify(req.body));
            // console.log('\n' + newClass);
            console.log('\n class was added');

        }

    });

});

module.exports = router;