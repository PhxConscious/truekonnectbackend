var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const paymentApi = require('./payment');

const configureRoutes = app => {
    paymentApi(app);
};

module.exports = configureRoutes;

module.exports = router;
