$.getJSON("http://excel.github.io/franklr/profiles.json")
  .done(function( json ) {
    $.each( json.profiles, function( key, val ) {
      available_profiles[key] = val;
    });

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
