const express = require('express'),
    router = express.Router(),
    fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    let whoisin = require('./../lib/whoisin')();

    let userModule, name;
    for (item in whoisin) {
        if(!fs.existsSync('./../lib/user_module/' + whoisin[item] + '.js')){
            continue;
        }
        try {
            userModule = require('./../lib/user_module/' + whoisin[item]);
            if (typeof userModule === 'function') {
                userModule = userModule();
            }
            name = userModule.getName();
            if (typeof name !== 'string') {
                throw TypeError('User Module for "' + item + '" is not string');
            }
            whoisin[item] = name;
        }
        catch (e) {
            console.error(e);
        }
    }

    res.render('index', {
        title: 'Introduction into GIT',
        whoisin: whoisin
    });
});

module.exports = router;
