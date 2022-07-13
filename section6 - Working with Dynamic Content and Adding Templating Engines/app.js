const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

const app = express();

// ejs
app.set('view engine', 'ejs');
// hbs
// app.engine(
//     'hbs',
//     expressHbs({
//         layoutDir: 'views/layouts', 
//         defaultLayout: 'main-layout',
//         extname: 'hbs'
//     }));
// app.set('view engine', 'hbs');
// pug
// app.set('view engine', 'pug');
app.set('views','views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: ''})
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
