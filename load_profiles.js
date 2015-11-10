$.getJSON("http://excel.github.io/franklr/profiles.json")
  .done(function( json ) {
    //matched_profiles = getCookie();
    $.each( json.profiles, function( key, val ) {
      available_profiles[key] = val;
    });

    profiles_copy = $.extend(true, [], available_profiles);
    shuffle(available_profiles);

    updateProfile();
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
});

$.getJSON("http://excel.github.io/franklr/feed.json")
  .done(function( json ) {
    $.each( json, function( key, val ) {
      feed_updates[key] = val;
    });
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
});

function getCookie() {
    var key,val,res;
    //get all cookie
    var oldCookie = document.cookie.split(';');
    for (var i = 0; i < oldCookie.length; i++) {
        key = oldCookie[i].substr(0,oldCookie[i].indexOf("="));
        val = oldCookie[i].substr(oldCookie[i].indexOf("=")+1);
        key = key.replace(/^\s+|\s+$/g,"");
        //find "user_cookie"
        if(key == "franklr") {
            res = val;
        }
    }
    if (res == undefined) {
        return [];
    } else {
        res = JSON.parse(res);
        return res;
    }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
