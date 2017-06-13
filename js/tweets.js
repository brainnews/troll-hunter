var $recentTweet;

$(function(){

	$.ajax({
		url: 'get_tweets.php',
		type: 'GET',
		success: function(response) {

			if (typeof response.errors === 'undefined' || response.errors.length < 1) {
				
				var $tweets = $('<ul></ul>');
				$.each(response, function(i, obj) {

					// this SHOULD look at all of my tweets to see if they are:
						// 1. Quoted tweets
						// 2. Have the "quoted_status" key in the JSON object

						// When someone deletes a tweet that you quoted, your tweet retains the "is_quoted_status" key (with value "true") but loses the "quoted_status" key

					if (obj.is_quoted_status == true && obj.hasOwnProperty('quoted_status') == false) {
						$tweets.append('<li>KILL</li>'); //Will eventually want to count these for the total, but for now, I want to see a list to make sure its getting all of them
					}
					
					// Uncomment below to show all tweets regardless of "quoted_status" being present
					// $tweets.append('<li>' + obj + '</li>');

				});

				$('.tweets-container').html($tweets);

			} else {
				$('.tweets-container p:first').text('Response error');
			}
		},
		error: function(errors) {
			$('.tweets-container p:first').text('Request error');
		}
	});
});