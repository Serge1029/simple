const mongoose = require('mongoose');
const express = require('express');
const URI = require('./mongoURI.js')
const accounts = require('./schemas/accountSchema.js');
const locations = require('./schemas/locationSchema.js');


mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true},(err) => {
    err ? console.log(err) : console.log('Mongoose connected to your database successfully!');
});

// example of the creation of a database lead 

/*
    var eric = new accounts({
        username: "eric",
        password: "drowssap"
    });

    accounts.create(eric, (err, res)=> {
        err ? console.log(err) : console.log('No errors during the creation of the lead');
        console.log(res);
    });
*/

var eric = new accounts({
    username: "eric",
    password: "drowssap"
});

accounts.create(eric, (err, res)=> {
    err ? console.log(err) : console.log('No errors during the creation of the lead');
    console.log(res);
});