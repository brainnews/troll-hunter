$(function(){

	$.ajax({
		url: 'get_tweets.php',
		type: 'GET',
		success: function(response) {

			if (typeof response.errors === 'undefined' || response.errors.length < 1) {
				
				var $tweets = $('<ul></ul>');
				$.each(response, function(i, obj) {
					// if (obj.quoted_status != null) {
					// 	if(obj.quoted_status.text == null) {
					// 		$tweets.append('<li>KILL</li>');
					// 	} else {
					// 		$tweets.append('<li>' + obj.quoted_status.text + '</li>');
					// 	}
					// }
					if (obj.quoted_status != null) {
						$tweets.append('<li>' + obj.quoted_status.id + '</li>');
					}
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