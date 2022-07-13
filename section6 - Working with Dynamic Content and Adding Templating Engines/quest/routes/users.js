const express = require('express');

const router = express.Router();

const users = [];

router.get('/add-user', (req, res, next) => {
    res.render('addUser', {pageTitle: 'Add User'});
});

router.post('/add-user', (req, res, next) => {
    users.push(req.body.userName);
    res.redirect('/');
})

exports.routes = router;
exports.users = users;