"use strict";

var express = require("express");
var mongo = require("mongoose");
var router = express.Router();
var cors = require("cors");
var assert = require('assert')

mongo.connect('mongodb://localhost/briefsDB')

var taskSchema = {
    id : Number,
    name : String,
    description : String,
    status : String,
    priority : String,
    open : Boolean,
    created : Date,
    due : Date,
    owner : String,
    assignto : String,
    category : String,
    formats : Array,
    client : Object
}

let task = mongo.model('task', taskSchema, 'tasks')

let app = express();
app.use(cors());
app.get('/gettasks/', function(req, res) {
    console.log("get the tasks list!");
    
    task.find({}, {}, { limit:20  }, function(err, doc) {
        //console.log("results! "+doc);
        //assert.equal(null,err);
        res.send(doc);
    });
});

app.listen(27017, function(){
    console.log("server ready !!!")
});
