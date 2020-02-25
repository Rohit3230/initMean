const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID; 
// var Sender = require('../Common/sender');
var db

MongoClient.connect('mongodb://public:public@ds137826.mlab.com:37826/node-crud', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 3333, () => {
    console.log('listening on 3333')
  })
})

// app.set('view engine', 'html')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use('/mongo/v0/admin/', require("./mongo/v0/admin/admin"));

app.get('/', (req, res) => {
    console.log('INIT MONGOAPI****');
    getDBConnection(function(err, db){
        db.collection('quotes').find().toArray((err, result) => {
            if (err) return res.send(err)
            // res.send('Server working...!')
            res.send(result)
            //res.render('index.ejs', {quotes: result})
        });
    });
});

getDBConnection = function getDBConnection(callback) {
    console.log('Working on====>http://localhost:3333/');
    callback(null, db);
};

module.exports = app;