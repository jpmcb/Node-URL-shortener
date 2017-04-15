var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var fs = require('fs');
var http = require('http');

var url = 'mongodb://jpmcb-url-shrotener-microservice-4611389:27017';

http.createServer(function(req, res) {
    if(req.url === '/') {
        // serve the homepage and usage of the API
        fs.readFile('./index.html', function(err, html) {
            if (err) {
                throw err;
            }
            
            res.writeHeader(200, {"Content-Type": "text/html"});
            res.write(html);
            res.end();
        })
    } else if (req.url === '/new/') { // with the ending being the passed URL ? 
        // create new mongoDB instance, place URL inside, and return shortend URL
    } else {
        //serach db for shortened url, found, redirect to URL, if not found, return error
    }
}).listen(process.env.PORT || 3000)

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("connected successfully to server");
});