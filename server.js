console.log('May Node be with you');

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
    console.log('listening on 3000');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    console.log(__dirname);
})

app.post('/quotes', (req, res) => {
    console.log(req.body);
})





