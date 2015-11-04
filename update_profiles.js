function updateProfile() {

  if (available_profiles.length > 0) {
    next_profile = available_profiles.shift();

    document.getElementById("picture").innerHTML =
      '<img src=img/' + next_profile.img + '>';
    document.getElementById("username").innerHTML =
      '<p>' + next_profile.name + '</p>';
    document.getElementById("age").innerHTML =
      '<p>' + next_profile.age + '</p>';
    document.getElementById("blurb").innerHTML =
      '<p>' + next_profile.blurb + '</p>';
  } else {
    clearProfile();
    clearButtons();
    document.getElementById("blurb").innerHTML =
      "<p>There's no one new around you.</p>";

  }
}

function clearProfile() {
  document.getElementById("picture").innerHTML = "";
  document.getElementById("username").innerHTML = "";
  document.getElementById("age").innerHTML = "";
  document.getElementById("blurb").innerHTML = "";
}

function clearButtons() {
  var parent = document.getElementById("franklr");
  var like = document.getElementById("like");
  var dislike = document.getElementById("dislike");
  parent.removeChild(like);
  parent.removeChild(dislike);
}
