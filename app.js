var Twitter = require('twitter');
var express = require('express');

var client = new Twitter({
  consumer_key: '5BD4KFCSUq9yWrEzokqchzGIC',
  consumer_secret: 'jQ7AG4xNBgeXDMvUZrfyn8lVPSwAn91IamIXBwY8FN2Dqszr8y',
  access_token_key: '721867249708089344-nUI016CkafRjaoIQCoi5LrbSjuuTazt',
  access_token_secret: '3y9H8jdwGg5XdJcxfwbojQIoQ06pMUXfSmUdBputvc2oM'
});

var visitCount = 0;


// client.get('search/tweets', {q: 'csc400Node'}, function(error, tweets, response){
//    console.log(tweets);
// });
var app= express();
// allTweets = [];

app.get('/', function (req, res) {
    visitCount += 1;
    var toPost = "Visits since server restart: " + visitCount + ".";
    client.post('statuses/update', {status: toPost}, function(error, tweet, response){
          if (!error) {
            console.log("Success!");
        } else {
            console.log(error);
        }
    });

    // client.get('statuses/user_timeline', {screen_name: 'csc400Node'}, function(error, tweets, response){
    //    //console.log(tweets);
    //    if (error) {
    //        console.log(error);
    //        console.log("There was an error");
    //    } else {
    //        console.log("success?");
    //         allTweets[0] = 5;
    //        //console.log(tweets);
    //        console.log(" ");
    //    }
    // });
    //
    // console.log(allTweets + "alltweets");
    // console.log("All Tweets");

    res.render('index.ejs', { count: visitCount });
})

app.listen(3000)
