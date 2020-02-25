var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var query = "SELECT * FROM `admin`";
    runQuery(query, [], function (err, result) { 
        if(
            err
        ){
            console.error('RUN QUERY ERROR******', JSON.stringify(err));
            res.send(err);
        }else{
            res.send(result);
        }
    });  
});

module.exports = router;