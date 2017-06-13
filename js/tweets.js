var kills = 0;

$(function(){

	$.ajax({
		url: 'get_tweets.php',
		type: 'GET',
		success: function(response) {

			if (typeof response.errors === 'undefined' || response.errors.length < 1) {
				
				var $tweets = $('<ul></ul>');

				$.each(response, function(i, obj) {
					//Filter out Retweeted tweets
					if (obj.retweeted == false) {
						//Check if tweet is a quoted tweet and then check if the quote_status key doesn't exist (the quoted_status key is present if the quoted tweet exists)
						if (obj.is_quote_status == true && obj.hasOwnProperty('quoted_status') == false) {
							//increment kill count
							kills++;
							//add kills to the <ul>
							$tweets.append('<li class="kill">Kill: ' + obj.text + '</li>');
						} else {
							//add regular tweets to the <ul>
							$tweets.append('<li>Live: ' + obj.text + '</li>');
						}
					}
					// Uncomment below to show all tweets regardless of "quoted_status" being present
					//$tweets.append('<li>' + obj.text + '</li>');
				});

				//add tweets to the page
				$('.tweets-container').html($tweets);
				//add kill count to the page
				$('.kill-count').text('Kill count: ' + kills);

			} else {
				$('.tweets-container p:first').text('Response error');
			}
		},
		error: function(errors) {
			$('.tweets-container p:first').text('Request error');
		}
	});
});