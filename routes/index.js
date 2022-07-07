var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home Automated Git Deployment' });
});

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.send('hellow world from committnig code to git and automated deployment to Azure cloud by app service');
});


/* GET error page. */
router.get('/error', function(req, res, next) {
  res.render('error',{message:'Error Message here',error:{stack:'error stack .',status:'4000'}});
});
module.exports = router;
