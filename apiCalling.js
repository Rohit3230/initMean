var express    = require('express');        // call express
var app        = express();                 // define our app using express
var process = require('process');

var test = function(mode) {

    console.log('Function Calling Mode:-------'+mode);

setImmediate(function(){console.log('setImmediate normal func*******1')});
setImmediate(function(){console.log('setImmediate normal func*******2')},0);
setImmediate(function(){console.log('setImmediate normal func*******3')});
setImmediate(function(){ console.log('setImmediate normal func*******4')},0);

setImmediate(() => console.log('setImmediate arrow func*******5'));
setImmediate(() => console.log('setImmediate arrow func*******6'),0);
setImmediate(() => console.log('setImmediate arrow func*******7'));
setImmediate(() => console.log('setImmediate arrow func*******8'),0);

setTimeout(function(){console.log('setTimeout normal func*******9')});
setTimeout(function(){console.log('setTimeout normal func*******10')},0);
setTimeout(function(){console.log('setTimeout normal func*******11')});
setTimeout(function(){ console.log('setTimeout normal func******12')},0);

setTimeout(() => console.log('setTimeout arrow func*******13'));
setTimeout(() => console.log('setTimeout arrow func*******14'),0);
setTimeout(() => console.log('setTimeout arrow func*******15'));
setTimeout(() => console.log('setTimeout arrow func*******16'),0);

process.nextTick(function(){console.log('process.nextTick normal func*******17')});
process.nextTick(function(){console.log('process.nextTick normal func*******18')},0);
process.nextTick(function(){console.log('process.nextTick normal func*******19')});
process.nextTick(function(){ console.log('process.nextTick normal func*******20')},0);

process.nextTick(() => console.log('process.nextTick arrow func*******21'));
process.nextTick(() => console.log('process.nextTick arrow func*******22'),0);
process.nextTick(() => console.log('process.nextTick arrow func*******23'));
process.nextTick(() => console.log('process.nextTick arrow func*******24'),0);


}


test('default');



var fetchUrl = require("fetch").fetchUrl;
 
fetchUrl("https://api.yogems.com/api/v0/activity/", function(error, meta, body){
    test('fetchUrl');

});

const request = require('request');
request('http://www.google.com', function (error, response, body) {
    test('request'); 
});


setImmediate(()=>{

    test('setImmediate');

    console.log('MEANs:  No matters you are using arrow functions or normal (classical) functions. ')
    console.log('Execution Secuence:-')
    console.log('First :- Process.nextTicke()');
    console.log('Second :- setTimeout()');
    console.log('Third :- setImmediate()');
    console.log('**********************************************')
    console.log('In case of asyn operation like calling api etc....');
    console.log('Execution Secuence:-')
    console.log('First :- Process.nextTicke()');
    console.log('Second :- setImmediate()');
    console.log('Third :- setTimeout()');

});

module.exports = app;