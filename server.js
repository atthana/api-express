// var express = require('express');
var exp = require('express');
var app = exp(); //constructor
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/database";

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get all tasks
app.get('/tasks', function (req, res) {
    MongoClient.connect(url, function (err, dbclient) {
        var db = dbclient.db("database");

        if (err) throw err;
        db.collection("tasks").find({}).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    });
});

// get task by id
app.get('/tasks/:id', function (req, res) {
    var id = req.params.id;

    MongoClient.connect(url, function (err, dbclient) {
        var ObjectId = require('mongodb').ObjectID;
        var query = {_id: ObjectId(id)};
        var db = dbclient.db("database");

        if (err) throw err;
        db.collection("tasks").find(query).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    });
});

// add new task to list
app.post('/tasks', (req, res) => {
    MongoClient.connect(url, function (err, dbclient) {
        var db = dbclient.db("database");

        if (err) throw err;
        db.collection("tasks").insert(req.body);
    });
    res.status(201).json(req.body)
})

// edit the task
app.put('/tasks/:id', (req, res) => {
    var id = req.params.id;

    MongoClient.connect(url, function (err, dbclient) {
        var ObjectId = require('mongodb').ObjectID;
        var db = dbclient.db("database");

        if (err) throw err;
        db.collection("tasks").update({_id: ObjectId(id)}, { $set: req.body});
    });
    res.json(req.body)
})

// delete task
app.delete('/tasks/:id', (req, res) => {
    var id = req.params.id;

    MongoClient.connect(url, function (err, dbclient) {
        var ObjectId = require('mongodb').ObjectID;
        var db = dbclient.db("database");

        if (err) throw err;
        db.collection("tasks").remove({_id: ObjectId(id)});
    });

    res.json({ message: 'Successfully deleted' });
})

app.listen(3000);