console.log('May Node be with you');

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

var db;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('mongodb://tacools10:Zidane10@ds255715.mlab.com:55715/harvey_spector_test', (err, database) => {
    if (err) return console.log(err);
    db = database;
    app.listen(3000, () => {
        console.log('listening on 3000')
    })

});

app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.render('index.ejs', {quotes: result})
    });
});

app.post('/quotes', (req, res) => {

    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('saved to database');
        res.redirect('/');
    })
});





