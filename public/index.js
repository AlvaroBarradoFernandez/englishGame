function button2() {
  document.location.href = "register.html"
}

function buttonLog(event) {
  var email = event.target.name.value;
  var pass = event.target.pass.value;
  var pass = document.getElementById("pass").value
  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

function observer() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user != "") {
      console.log("Exits")
      var displayName = user.displayName;
      var email = user.email;
      var pass = user.password;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
    } else {
      console.log("Doesn't exits");
    }
  });
}

function log() {
  document.location.href = "englishgame.html";
}
