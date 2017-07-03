// This file is not used -- just here for reference
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/database');
const User = require('../models/user');
const Schedule = require('../models/schedule');

router.post('/addClass', (req, res, next) => {
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
            console.log('\n class was added');

        }

    });

});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
  console.log('got profile in schedule');
});

module.exports = router;