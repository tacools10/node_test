console.log('May Node be with you');

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

var db;

app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds255715.mlab.com:55715/harvey_spector_test', (err, database) => {
    if (err) return console.log(err);
    db = database;
    app.listen(3000, () => {
        console.log('listening on 3000')
    })

})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    console.log(__dirname);
})

app.post('/quotes', (req, res) => {

    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('saved to database');
        res.redirect('/');
    })
})





