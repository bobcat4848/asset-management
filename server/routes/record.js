const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");
var ObjectId = require('mongodb').ObjectId; 


// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// Get a specific item based on ID
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  var myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").findOne(myquery, function (err, obj) {
    if (err) throw err;
    res.json(obj);
  });
});

// Get a specific item based on ID
recordRoutes.route("/record/:item_name").get(function (req, res) {
  let db_connect = dbo.getDb();
  var myquery = { item_name: ObjectId(req.params.item_name) };
  db_connect.collection("records").findMany(myquery, function (err, obj) {
    if (err) throw err;
    res.json(obj);
  });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, res) {
  let db_connect = dbo.getDb();
  let myobj = {
    item_name: req.body.item_name,
    item_picture_url: req.body.item_picture_url,
    item_id_numbers: req.body.item_id_numbers,
    item_storage_loc: req.body.item_storage_loc,
    item_checked_out: req.body.item_checked_out,
    person_checked_out:req.body.person_checked_out,
    item_keywords: req.body.item_keywords,
    item_notes: req.body.item_notes,
    item_temp: req.body.item_temp,
  };
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, res) {
  let db_connect = dbo.getDb();
  var myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      item_name: req.body.item_name,
      item_picture_url: req.body.item_picture_url,
      item_id_numbers: req.body.item_id_numbers,
      item_storage_loc: req.body.item_storage_loc,
      item_checked_out: req.body.item_checked_out,
      person_checked_out:req.body.person_checked_out,
      item_keywords: req.body.item_keywords,
      item_notes: req.body.item_notes,
      item_temp: req.body.item_temp,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, res) => {
  let db_connect = dbo.getDb();
  var myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

module.exports = recordRoutes;