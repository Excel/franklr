var empty = false;

function updateProfile() {
  var json_str = JSON.stringify(matched_profiles);

  //set cookie date expired
    var date = new Date();
    date.setTime(date.getTime()+(2*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
    //create cookie
    document.cookie = "franklr="+json_str+expires;

  if (available_profiles.length > 0) {
    empty = false;
      next_profile = available_profiles.shift();

    document.getElementById("picture").innerHTML =
      '<img src=img/' + next_profile.img + '>';
    document.getElementById("username").innerHTML =
      '<p>' + next_profile.name + '</p>';
    document.getElementById("age").innerHTML =
      '<p>' + next_profile.age + '</p>';
    document.getElementById("about").innerHTML =
      '<p> About ' + next_profile.name + '</p>';
    document.getElementById("blurb").innerHTML =
      '<p>' + next_profile.blurb + '</p>';
  } else {
    empty = true;
    clearProfile();
    clearButtons();
    document.getElementById("blurb").innerHTML =
      "<p style='text-align: center'>There's no one new around you.</p>";

  }
}

function clearProfile() {
  document.getElementById("picture").innerHTML = "";
  document.getElementById("username").innerHTML = "";
  document.getElementById("age").innerHTML = "";
  document.getElementById("about").innerHTML = "";
  document.getElementById("blurb").innerHTML = "";
}

function clearButtons() {
  var parent = document.getElementById("buttons");
  parent.className = "hidden";

  parent = document.getElementById("name_container");
  parent.className = "hidden";
}

function addButtons() {
  var parent = document.getElementById("buttons");
  parent.className = "";

  parent = document.getElementById("name_container");
  parent.className = "";
}
