var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '5BD4KFCSUq9yWrEzokqchzGIC',
  consumer_secret: 'jQ7AG4xNBgeXDMvUZrfyn8lVPSwAn91IamIXBwY8FN2Dqszr8y',
  access_token_key: '721867249708089344-nUI016CkafRjaoIQCoi5LrbSjuuTazt',
  access_token_secret: '3y9H8jdwGg5XdJcxfwbojQIoQ06pMUXfSmUdBputvc2oM'
});

client.post('statuses/update', {status: 'No I am not.'}, function(error, tweet, response){
  if (!error) {
    console.log("Success!");
  }
});

client.get('search/tweets', {q: 'csc400Node'}, function(error, tweets, response){
   console.log(tweets);
});
