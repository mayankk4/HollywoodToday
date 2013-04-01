
function refresh_hollywood_news() {
	var content_div_id = "hollywood-news";
	var url = 'http://feeds.feedburner.com/thr/boxoffice';

	var feeds = fetch_feeds(url, content_div_id);
}

function refresh_hollywood_releases() {
	var content_div_id = "hollywood-releases";
	var url = 'http://feeds.hollywood.com/hollywoodcom_new_movies_this_week';

	var feeds = fetch_feeds(url, content_div_id);		
}

function refresh_hollywood_gossip() {
	var content_div_id = "hollywood-gossip";
	var url = 'http://www.hollywoodgo.com/celebrity-gossip/feed/';

	var feeds = fetch_feeds(url, content_div_id);
}


function fetch_feeds(url, div_id) {
	$.jQRSS(url, function(feed) {
		set_feeds(div_id, feed);
	});

function set_feeds(div_id, feeds) {
	
	// first clear content
	jQuery('#' + div_id).html('');
	
	var length = feeds.entries.length;
    var element = null;

	for (var i = 0; i < length; i++) {
	  element = feeds.entries[i];
		jQuery('#' + div_id).append("<div class='feed-wrapper feed" + i +  "'></div>");
		if((parseInt(i)%2) != 0) {
			jQuery('#' + div_id + " .feed" + i).css('background-color', '#E4E4E4');
		}
		jQuery('#' + div_id + " .feed" + i).append("<p class='feed-title'>" + element.title + "</p>");
		if (!!element.author) {
			jQuery('#' + div_id + " .feed" + i).append("<p style='font-size: 9px; padding-bottom: 1px;'>By - " + element.author + "</p>");			
		}
		if (!!element.publishedDate) {
			jQuery('#' + div_id + " .feed" + i).append("<p style='font-size: 9px; padding-bottom: 5px;'>On - " + element.publishedDate + "</p>");
		}
		jQuery('#' + div_id + " .feed" + i).append('<a href="#">Read More</a>');	  
		jQuery('#' + div_id + " .feed" + i + " a").click(function() {
			mwl.loadURL(element.link);
			return false;
		});
	}
}
}