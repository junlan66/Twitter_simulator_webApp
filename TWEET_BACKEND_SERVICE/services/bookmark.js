var ObjectID = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient;
var config = require('../config/settings');
var mydb;

// // Initialize connection once
// MongoClient.connect(config.mongodb, config.dbsetting, function(err, client) {
//   //if(err) throw err;
//   mydb = client.db(config.dbname);
// });

MongoClient.connect(config.mongodb2, config.dbsetting, function(err, db) {
    if(err) throw err;
    mydb = db;
});


function handle_request(msg, callback){
    console.log("In handle request:"+ JSON.stringify(msg));
    var response = {};

    if (!msg.hasOwnProperty('userid') || !msg.hasOwnProperty('tweetid') || !Number.isInteger(parseInt(msg.userid))) {
        response.code = "202";
        response.value = "wrong req body";

        callback(null,response);
    }
    else {
        let bookmark = mydb.collection('bookmark');

        bookmark.update({userId: parseInt(msg.userid)}, { $push: { tweetId: ObjectID(msg.tweetid) } }, function(err,result){
            if (!err) {
                response.code = "200";
                response.value = "Successfully bookmark";
        
                callback(null,response);
            }
        });
    }

    
    
}

exports.handle_request = handle_request;




