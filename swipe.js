function like() {
  $("#popup").hide();
  matchPopup();
  addMatch();
  updateProfile();
}

function dislike() {
  updateProfile();
}

function matchPopup() {
    //select the POPUP FRAME and show it
    $("#popup").fadeIn(200);

    setTimeout(function() { $("#popup").fadeOut(500); }, 3000);
}

function addMatch() {
  matched_profiles.push(next_profile);

  var ul = document.getElementById('matches');
  var profile = next_profile;

  var li = document.createElement('li');
  li.id = profile.name;
  li.innerHTML = '<img src=img/' + profile.img + '>'
      + '<div id ="right-hold">'
      + '<br />'
      + '<strong>' + profile.name + '</strong> '
      + '</div>';
  ul.insertBefore(li, ul.firstChild);
}

function unmatch() {
  shuffle(matched_profiles);
  var empty_set = available_profiles.length === 0 && empty;
  available_profiles = available_profiles.concat(matched_profiles);
  matched_profiles = [];
  var ul = document.getElementById('matches');
  ul.innerHTML = "";

  if (empty_set) {
    addButtons();
    updateProfile();
  }
}
