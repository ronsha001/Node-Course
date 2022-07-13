const path = require('path')

const express = require('express')

const mainRoutes = require('./routes/main')
const userRoutes = require('./routes/users')
const rootDir = require('./util/path')

const app = express();

app.use(express.static(path.join(rootDir, 'public')))

app.use('/users', userRoutes)
app.use('/', mainRoutes)

app.use((req, res, next) => {
    res.send('<h1>page not 5 found</h1>')
})

app.listen(3000)