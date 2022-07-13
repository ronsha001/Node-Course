const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');
const homeRoutes = require('./routes/home');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/users', userRoutes.routes);
app.use(homeRoutes);



app.listen(3000);