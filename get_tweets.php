<?php

require_once('twitter_proxy.php');

// Twitter OAuth Config options
$oauth_access_token = '49634023-JNqy4RZW8FDCz6KG5xfuvameA3GohRF1LkvymqZJN';
$oauth_access_token_secret = 'yptLQTzS4mUi0JAJzHud0lrrMUgsGGJQLJaAGxSrFIlIY';
$consumer_key = 'PAWJh6RMzWwc2BEocbsoOhuBI';
$consumer_secret = 'YMK6MuhOJLQ4ppm9Q0HVREFBc3b0qXV3NYpI7nm0zE4gChszW0';
$user_id = '95975081';
$screen_name = 'minakimes';
$count = 3200;

$twitter_url = 'statuses/user_timeline.json';
$twitter_url .= '?user_id=' . $user_id;
$twitter_url .= '&screen_name=' . $screen_name;
$twitter_url .= '&count=' . $count;

// Create a Twitter Proxy object from our twitter_proxy.php class
$twitter_proxy = new TwitterProxy(
	$oauth_access_token,			// 'Access token' on https://apps.twitter.com
	$oauth_access_token_secret,		// 'Access token secret' on https://apps.twitter.com
	$consumer_key,					// 'API key' on https://apps.twitter.com
	$consumer_secret,				// 'API secret' on https://apps.twitter.com
	$user_id,						// User id (http://gettwitterid.com/)
	$screen_name,					// Twitter handle
	$count							// The number of tweets to pull out
);

// Invoke the get method to retrieve results via a cURL request
$tweets = $twitter_proxy->get($twitter_url);

echo $tweets;

?>