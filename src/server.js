"use strict";

var express = require("express");
var mongo = require("mongoose");
var router = express.Router();
var cors = require("cors");
var assert = require('assert')
var url = 'mongodb://avrik:avrik123@ds161159.mlab.com:61159/briefsdb'; // 'mongodb://localhost/briefsDB';
var Schema = mongo.Schema;
var bodyParser = require('body-parser');

mongo.Promise = global.Promise;
mongo.connect(url)

var userSchema = new Schema({
    userId: Number,
    name: String,
    avatarId: Number,
}, { collection: 'users' })

var taskSchema = new Schema({
    index: Number,
    title: String,
    description: String,
    status: Number,
    created: Number,
    due: Number,
    formats: [],
    assignto: Number,
    priority: Number,
    open: Boolean,
    category: String,
}, { collection: 'tasks' })

var clientSchema = new Schema({
    clientId: Number,
    index: Number,
    name: String,
    description: String,
    profile: String,
    logoUrl: String,
    siteUrl: String,
    address: {},
    contacts: [],
    relatedTasks: []
}, { collection: 'clients' })

var projectSchema = new Schema({
    projectId: Number,
    projectNumber: Number,
    index: Number,
    title: String,
    description: String,
    projectId: Number,
    clientId: Number,
    relatedTasks: []
}, { collection: 'projects' })

let BriefTask = mongo.model('BriefTask', taskSchema, 'tasks');
let Client = mongo.model('Client', clientSchema, 'clients');
let User = mongo.model('User', userSchema, 'users');
let Project = mongo.model('Project', projectSchema, 'projects');

let app = express();
app.use(bodyParser.json()); // This is the type of body we're interested in
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.route('/clients/')
    .get(function(req, res) {
        console.log("get the client list!");
        Client.find({}, {}, { limit: 100 }, function(err, doc) {
            assert.equal(null, err);
            res.send(doc);
        });
    })
    .post(function(req, res, next) {
        var client = new Client(req.body);
        client.save(function(err, client) {
            if (err) { return next(err); }
            res.json(client);
        });
    })
    .put(function(req, res) {
        Client.findByIdAndUpdate(req.body._id, req.body, function(err, result) {
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
    })



app.route('/briefs/')
    .get(function(req, res) {
        console.log("get the tasks list!");
        BriefTask.find({}, {}, { limit: 100 }, function(err, doc) {
            assert.equal(null, err);
            res.send(doc);
        });
    })
    .post(function(req, res, next) {
        var task = new BriefTask(req.body);
        task.save(function(err, task) {
            if (err) { return next(err); }
            res.json(task);
        });
    })
    .put(function(req, res) {
        BriefTask.findByIdAndUpdate(req.body._id, req.body, function(err, result) {
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
    }).delete(function(req, res) {
        BriefTask.delete(req._id, function(err, result) {
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
    });


app.route('/users/')
    .get(function(req, res) {
        console.log("get the users list!");

        User.find({}, {}, { limit: 100 }, function(err, doc) {
            assert.equal(null, err);
            res.send(doc);
        });
    })
    .post(function(req, res, next) {
        var user = new User(req.body);
        user.save(function(err, user) {
            if (err) { return next(err); }
            res.json(user);
        });
    })
    .put(function(req, res) {
        User.findByIdAndUpdate(req.body._id, req.body, function(err, result) {
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
    })




app.route('/projects')
    .get(function(req, res) {
        Project.find({}, {}, { limit: 100 }, function(err, doc) {
            assert.equal(null, err);
            res.send(doc);
        });
    })
    .post(function(req, res, next) {
        var project = new Project(req.body);
        project.save(function(err, project) {
            if (err) { return next(err); }
            res.json(project);
        });
    });


app.listen(27017, function() {
    console.log("server ready !!!1")
});