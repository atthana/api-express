var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/database";

// create database
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
});

// create collections name lists to store datas
MongoClient.connect(url, function (err, dbclient) {
    if (err) throw err;
    var db = dbclient.db("database");

    db.createCollection("tasks", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
    });
});

// store samples datas
MongoClient.connect(url, function(err, dbclient) {
  if (err) throw err;

  var db = dbclient.db("database");

  var lists = [{
        subject: "task 1",
        content: "start on 01",
        done: 1
      },
      {
        subject: "task 2",
        content: "start on 02",
        done: 0
      },
      {
        subject: "task 3",
        content: "start on 03",
        done: 0
      }
    ];

  db.collection("tasks").insertMany(lists, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
  });
});