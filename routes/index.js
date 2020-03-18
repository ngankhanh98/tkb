var express = require("express");
var router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db/tkb.json");
const db = low(adapter);
var obj = db
  .get("tkb")
  .value();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render('index', { row: obj });
  console.log(obj);
});

module.exports = router;
