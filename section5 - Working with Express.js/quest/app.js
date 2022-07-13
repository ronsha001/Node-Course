const express = require('express')

const app = express();

app.use('/users', (req, res, next) => {
    console.log("In the last mw")
    res.send("user page")
})

app.use('/', (req, res, next) => {
    console.log("In the first mw")
    res.send("main page")
})




app.listen(3000)