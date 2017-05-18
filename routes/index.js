const express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const whoisin = require('./../lib/whoisin');
    res.render('index', {
        title: 'Introduction into GIT',
        whoisin: whoisin
    });
});

module.exports = router;
