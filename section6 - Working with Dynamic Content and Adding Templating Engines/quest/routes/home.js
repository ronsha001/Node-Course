const express = require('express');

const users = require('./users').users;

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home', {pageTitle: 'Home', users: users});
});

module.exports = router;