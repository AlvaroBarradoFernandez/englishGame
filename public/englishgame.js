function logout() {
  firebase.auth().signOut().then(function() {
    document.location.href = "index.html";
  }).catch(function(error) {});
}


var date = new Date();
var minute = date.getMinutes();
var hour = date.getHours();
var seconds = date.getSeconds();

function minus() {
  var date2 = new Date();
  var minute2 = date2.getMinutes();
  var hour2 = date2.getHours();
  var seconds2 = date2.getSeconds();
  var minusHour = hour2 - hour
  var minusMinute = minute2 - minute
  var minusSeconds = seconds2 - seconds
  alert("Your time: " + minusHour + "h " + minusMinute + "m " + minusSeconds + "s ")
}

function enviartexto2() {
  var texto = document.getElementById("text").value;
  var a = document.getElementsByClassName("circuloA");
  var b = document.getElementsByClassName("circuloB");
  var c = document.getElementsByClassName("circuloC");
  var d = document.getElementsByClassName("circuloD");

  var e = document.getElementsByClassName("circuloE");
  var f = document.getElementsByClassName("circuloF");
  var g = document.getElementsByClassName("circuloG");
  var h = document.getElementsByClassName("circuloH");

  var i = document.getElementsByClassName("circuloI");
  var j = document.getElementsByClassName("circuloJ");
  var k = document.getElementsByClassName("circuloK");
  var l = document.getElementsByClassName("circuloL");

  var m = document.getElementsByClassName("circuloM");
  var n = document.getElementsByClassName("circuloN");
  var w2 = document.getElementsByClassName("circuloW2");
  var o = document.getElementsByClassName("circuloO");

  var p = document.getElementsByClassName("circuloP");
  var q = document.getElementsByClassName("circuloQ");
  var r = document.getElementsByClassName("circuloR");
  var s = document.getElementsByClassName("circuloS");

  var t = document.getElementsByClassName("circuloT");
  var u = document.getElementsByClassName("circuloU");
  var v = document.getElementsByClassName("circuloV");
  var x = document.getElementsByClassName("circuloW");

  var y = document.getElementsByClassName("circuloX");
  var z = document.getElementsByClassName("circuloY");


  if (document.getElementById("text").value == "april") {
    for (var i = 0; i < a.length; i++) a[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById("ar").innerHTML = "April";
    document.getElementById('ar').style.color = "black";
  }

  if (document.getElementById("text").value == "blue") {
    for (var i = 0; i < b.length; i++) b[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById("br").innerHTML = "Blue";
    document.getElementById('br').style.color = "black";
  }

  if (document.getElementById("text").value == "cat") {
    for (var i = 0; i < c.length; i++) c[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById("cr").innerHTML = "Cat";
    document.getElementById('cr').style.color = "black";
  }

  if (document.getElementById("text").value == "dinosaur") {
    for (var i = 0; i < d.length; i++) d[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById("dr").innerHTML = "Dinosaur";
    document.getElementById('dr').style.color = "black";
  }

  if (document.getElementById("text").value == "elephant") {
    for (var i = 0; i < e.length; i++) e[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('er').innerHTML = "Elephant";
    document.getElementById('er').style.color = "black";

  }

  if (document.getElementById("text").value == "fail") {
    for (var i = 0; i < f.length; i++) f[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('fr').innerHTML = "Fail";
    document.getElementById('fr').style.color = "black";

  }

  if (document.getElementById("text").value == "gift") {
    for (var i = 0; i < g.length; i++) g[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('gr').innerHTML = "Gift";
    document.getElementById('gr').style.color = "black";

  }

  if (document.getElementById("text").value == "happy") {
    for (var i = 0; i < h.length; i++) h[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('hr').innerHTML = "Happy";
    document.getElementById('hr').style.color = "black";
  }

  if (document.getElementById("text").value == "intelligent") {
    for (var k = 0; k < i.length; k++) i[k].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('ir').innerHTML = "Intelligent";
    document.getElementById('ir').style.color = "black";

  }

  if (document.getElementById("text").value == "jam") {
    for (var i = 0; i < j.length; j++) j[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('jr').innerHTML = "Jam";
    document.getElementById('jr').style.color = "black";
  }

  if (document.getElementById("text").value == "key") {
    for (var i = 0; i < k.length; i++) k[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('kr').innerHTML = "Key";
    document.getElementById('kr').style.color = "black";

  }

  if (document.getElementById("text").value == "lion") {
    for (var i = 0; i < l.length; i++) l[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('lr').innerHTML = "Lion";
    document.getElementById('lr').style.color = "black";
  }
  if (document.getElementById("text").value == "minute") {
    for (var i = 0; i < m.length; i++) m[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('mr').innerHTML = "Minute";
    document.getElementById('mr').style.color = "black";

  }

  if (document.getElementById("text").value == "orange") {
    for (var i = 0; i < n.length; i++) n[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('nr').innerHTML = "Orange";
    document.getElementById('nr').style.color = "black";
  }

  if (document.getElementById("text").value == "jaw") {
    for (var i = 0; i < w2.length; i++) w2[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('w2r').innerHTML = "Jaw";
    document.getElementById('w2r').style.color = "black";

  }
  if (document.getElementById("text").value == "parrot") {
    for (var i = 0; i < o.length; i++) o[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('or').innerHTML = "Parrot";
    document.getElementById('or').style.color = "black";
  }

  if (document.getElementById("text").value == "pig") {
    for (var i = 0; i < p.length; i++) p[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('pr').innerHTML = "Pig";
    document.getElementById('pr').style.color = "black";
  }
  if (document.getElementById("text").value == "queen") {
    for (var i = 0; i < q.length; i++) q[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('qr').innerHTML = "Queen";
    document.getElementById('qr').style.color = "black";
  }

  if (document.getElementById("text").value == "carrot") {
    for (var i = 0; i < r.length; i++) r[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('rr').innerHTML = "Carrot";
    document.getElementById('rr').style.color = "black";

  }
  if (document.getElementById("text").value == "spain") {
    for (var i = 0; i < s.length; i++) s[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('sr').innerHTML = "Spain";
    document.getElementById('sr').style.color = "black";
  }

  if (document.getElementById("text").value == "water") {
    for (var i = 0; i < t.length; i++) t[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('tr').innerHTML = "Water";
    document.getElementById('tr').style.color = "black";

  }
  if (document.getElementById("text").value == "umbrella") {
    for (var i = 0; i < u.length; i++) u[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('ur').innerHTML = "Umbrella";
    document.getElementById('ur').style.color = "black";
  }

  if (document.getElementById("text").value == "virus") {
    for (var i = 0; i < v.length; i++) v[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('vr').innerHTML = "Virus";
    document.getElementById('vr').style.color = "black";

  }
  if (document.getElementById("text").value == "xylophone") {
    for (var i = 0; i < x.length; i++) x[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('wr').innerHTML = "Xylophone";
    document.getElementById('wr').style.color = "black";
  }

  if (document.getElementById("text").value == "year") {
    for (var i = 0; i < y.length; i++) y[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('xr').innerHTML = "Year";
    document.getElementById('xr').style.color = "black";


  }
  if (document.getElementById("text").value == "zebra") {
    for (var i = 0; i < z.length; i++) z[i].style.backgroundImage = "radial-gradient(lightgreen, green)";
    document.getElementById('text').value = '';
    document.getElementById('yr').innerHTML = "Zebra";
    document.getElementById('yr').style.color = "black";
  }


}

function check() {
  if (document.getElementById('text').value != "april" && document.getElementById('text').value != "blue" && document.getElementById('text').value != "cat" && document.getElementById('text').value != "dinosaur" && document.getElementById('text').value != "elephant" && document.getElementById('text').value != "fail" && document.getElementById('text').value != "gift" && document.getElementById('text').value != "happy" && document.getElementById('text').value != "intelligent" && document.getElementById('text').value != "jam" && document.getElementById('text').value != "key" && document.getElementById('text').value != "lion" && document.getElementById('text').value != "minute" && document.getElementById('text').value != "orange" && document.getElementById('text').value != "parrot" && document.getElementById('text').value != "queen" && document.getElementById('text').value != "carrot" && document.getElementById('text').value != "spain" && document.getElementById('text').value != "water" && document.getElementById('text').value != "umbrella" && document.getElementById('text').value != "virus" && document.getElementById('text').value != "xylophone" && document.getElementById('text').value != "year" && document.getElementById('text').value != "zebra" && document.getElementById('text').value != "pig" && document.getElementById('text').value != "jaw") {
    var counter = document.getElementById("life")
    counter.innerHTML--
    var audio = document.getElementById("audio2");
    audio.play();
    if (counter.innerHTML == 0) {
      alert("Ooooooooooh you lose");
      document.getElementById("text").style.display = "none"
      document.getElementById("life").style.display = "none"
      document.getElementById("h3Top").style.display = "none"
      document.getElementById("h4Bottom").style.display = "none"
      document.getElementById("h1TopTop").style.display = "none"
    }

  } else {
    var counterGreen = document.getElementById("counterGr")
    counterGreen.innerHTML++;
    var audio = document.getElementById("audio");
    audio.play();
    if (counterGreen.innerHTML == 26) {
      // var date = new Date();
      // var minute = date.getTime();
      // alert(date)
      alert("YOU WIN");
      minus();
      document.getElementById("text").style.display = "none"
      document.getElementById("life").style.display = "none"
      document.getElementById("h3Top").style.display = "none"
      document.getElementById("h4Bottom").style.display = "none"
      document.getElementById("h1TopTop").style.display = "none"
    }
  }

}
