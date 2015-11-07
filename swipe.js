function like() {
  $("#popup").hide();
  document.getElementById("popup").innerHTML =
    	'<img src="img/match.png">';
  matchPopup();
  addMatch();
  updateProfile();
}

function dislike() {
  var popup = document.getElementById("popup");
  var rand = Math.random() * 3;
  if (rand < 1) {
    popup.innerHTML = '<img src="img/rejected.png">';

  } else if (rand < 2) {
      popup.innerHTML ='<img src="img/pwnt.png">';
  } else {
    popup.innerHTML ='<img src="img/fxck.png">';
  }
  matchPopup();
  updateProfile();
}

function matchPopup() {
    //select the POPUP FRAME and show it
    $("#popup").fadeIn(200);

    setTimeout(function() { $("#popup").fadeOut(500); }, 3000);
}

function addMatch() {
  matched_profiles.push(next_profile);

  if (next_profile.age == 17) {
    spam = next_profile;
    spamFeed();
  }

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
  var total = document.getElementById('total');
  total.innerHTML = matched_profiles.length + ' Matchstaches';
}

function unmatch() {
  spam = null;
  spamFeed();
  shuffle(matched_profiles);

  clearInterval(dispID);
  var empty_set = available_profiles.length === 0 && empty;
  available_profiles = available_profiles.concat(matched_profiles);
  matched_profiles = [];

  var total = document.getElementById('total');
  total.innerHTML = '0 Matchstaches';
  var ul = document.getElementById('matches');
  ul.innerHTML = "";

  if (empty_set) {
    addButtons();
    updateProfile();
  }
}
