const path = require('path')

const rootDir = require('../util/path')

const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('in users page')
    res.sendFile(path.join(rootDir, 'views', 'users.html'))
})

module.exports = router