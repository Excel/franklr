/*
    feed.js
    Post all the new messages and status updates.
*/
var recent_id = -1;



// This code will be executed when the page finishes loading
window.addEventListener('load', function(){
    //display one tweet every 3000 milliseconds or so
    var dispID = window.setInterval(disp, 4000);


    //do it initially so it doesn't wait
    disp();


	//i don't actually know why this is here
	var ul = document.getElementById('franklr_feed');
	var li = document.createElement('li');
	li.innerHTML = '<strong>' + "ahhhhhhh~" + '</strong> ';
	ul.appendChild(li);

}, false);


function req(theURL, callback){
				// create a request object
				var request = new XMLHttpRequest();

				// specify the HTTP method, URL, and asynchronous flag
				request.open('GET', theURL, true);

				// add an event handler
				request.addEventListener('load', function(e){
				    if (request.status == 200) {
				        // do something with the loaded content
				        var content = request.responseText;
						var data = JSON.parse(content);
						// we have an unordered list of Tweets

						for(var i = 0; i < data.length; i++){
								tweets.push(data[i]);
						}

				    } else {
				        // something went wrong, check the request status
				        // hint: 403 means Forbidden, maybe you forgot your username?
				    }
				}, false);

				// start the request, optionally with a request body for POST requests
				request.send(null);
}

function disp(){
  if (matched_profiles.length === 0 && feed_updates.length === 0) {
    return;
  }
	var ul = document.getElementById('franklr_feed');
  var rand_index = Math.floor(Math.random() * matched_profiles.length);

  if (rand_index >= 0) {
    if (recent_id === rand_index) {
      var doublepost = Math.random();
      if (doublepost < 0.5) {
        rand_index = Math.floor(Math.random() * matched_profiles.length);
      }
    }

    recent_id = rand_index;
		//THIRTY IS ENOUGH
		while(ul.childNodes.length > 30){
			ul.removeChild(ul.lastChild);

		}

    var timestamp = Date();

    var profile = matched_profiles[recent_id];

    var header_text = "";
    var message_chance = Math.random();
    var message_idx = "";

    if (message_chance < 0.5) {
      header_text = "STATUS UPDATE:";
      message_idx = "statuses";
    } else {
      header_text = "NEW MESSAGE:";
      message_idx = "messages";
    }

    var specify = (profile.name in feed_updates[message_idx]) ?
      profile.name :
      "everyone";

    var choices = feed_updates[message_idx][specify];
    var message = choices[Math.floor(Math.random() * choices.length)];


		var li = document.createElement('li');
		li.innerHTML = '<img src=img/' + profile.img + '>'
				+ '<div id ="right-hold">'
        + '<strong>' + header_text + '</strong> '
        + '<br />'
        + '<strong>' + profile.name + '</strong> '
        + '<br />'
        + message
        + '<br />' + timestamp + '</div>';
		ul.insertBefore(li, ul.firstChild);

  }

}
