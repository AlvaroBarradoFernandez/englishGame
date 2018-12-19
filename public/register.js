function button() {
  var email2 = document.getElementById("name2").value
  var pass2 = document.getElementById("pass2").value


  firebase.auth().createUserWithEmailAndPassword(email2, pass2).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (email2.includes("@")) {
    firebase.auth().signOut().then(function() {
      document.getElementById("name2").value = ""
      document.getElementById("name2").value = ""
      document.location.href = "index.html";
    }).catch(function(error) {
      // An error happened.
    });
    } else {
      window.alert("Wrong User or email");
    }
  });

}
