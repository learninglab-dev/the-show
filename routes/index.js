var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "show and tell", date: moment().format("YYYYMMDD")});
});

router.get('/menu', function(req, res, next) {
  // get appts from google cal?
  // get
  res.render('menu', { title: "show and tell" });
});

router.get('emoji-data', function(req, res, next){
  var theData = [
    {
      name: "element 1",
      size: 100
    },
    {
      name: "element 2",
      size: 150
    },
    {
      name: "element 3",
      size: 200
    },
    {
      name: "element 4",
      size: 300
    },
    {
      name: "element 5",
      size: 237
    },
  ]
  res.render('d3/barChart', { data: theData });
})

module.exports = router;
