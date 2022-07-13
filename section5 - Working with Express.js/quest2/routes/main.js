const path = require('path')

const rootDir = require('../util/path')

const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('in main page')
    res.sendFile(path.join(rootDir, 'views', 'main.html'))
})

module.exports = router