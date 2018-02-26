var checkForSaved = () => {
  if (localStorage.getItem("savedName")) {
    var savedName = localStorage.getItem("savedName");
    var savedAnimal = localStorage.getItem("savedAnimal");
    document.getElementById('intro-text').innerHTML = "Welcome back "
    + savedName + "! You previously took the Spirit Animal test and were matched with "
    + savedAnimal + ". Would you like to take the test again?";
  }
}
//default user choices all start as true;
var userChoice = {
  big: 'true',
  aggressive: 'true',
  furry: 'true',
}

var bestAnimal = 0;
var bestScore = 0;
var currentScoreTotal = 0;

//animal data in array
var animalData = [
  {
    name: 'Crow',
    big: 'false',
    aggressive: 'true',
    furry: 'true',
  },
  {
    name: 'Slug',
    big: 'false',
    aggressive: 'false',
    furry: 'false',
  },
  {
    name: 'Elephant',
    big: 'true',
    aggressive: 'false',
    furry: 'false',
  }
]

var findAnimal = () => {
  //get user name from input field
  var userName = document.getElementById("inputName").value;
  if (userName != '') { //if not blank, show that name has been captured and store locally
      document.getElementById('results').innerHTML = "Your name is "
      + userName + ".";
      localStorage.setItem('savedName', userName)
    } else { //if blank, alert user
    alert('Name field cannot be blank.')
  }
  var bigResult = document.getElementsByName('big');
  if (bigResult[1].checked) {
    userChoice.big = 'false';
  }
  var aggressiveResult = document.getElementsByName('aggressive');
  if (aggressiveResult[1].checked) {
    userChoice.aggressive = 'false';
  }
  var furryResult = document.getElementsByName('furry');
  if (furryResult[1].checked) {
    userChoice.furry = 'false';
  }


  //test answers vs. animals
  for (var i = 0; i < animalData.length; i++) {
    if (animalData[i].big === userChoice.big) {
      currentScoreTotal += 1;
      document.getElementById('results').innerHTML += "<br>userChoice Big matches, score is now "
      + currentScoreTotal + ".";
    }
    if (animalData[i].aggressive === userChoice.aggressive) {
      currentScoreTotal += 1;
      document.getElementById('results').innerHTML += "<br>userChoice Aggressive matches, score is now "
      + currentScoreTotal + ".";
    }
    if (animalData[i].furry === userChoice.furry) {
      currentScoreTotal += 1;
      document.getElementById('results').innerHTML += "<br>userChoice Furry matches, score is now "
      + currentScoreTotal + ".";
    }
    document.getElementById('results').innerHTML += "<br>Total score against " + animalData[i].name + " is "
    + currentScoreTotal + ".";
    if (currentScoreTotal > bestScore) {
      bestScore = currentScoreTotal;
      bestAnimal = i;
    }
    currentScoreTotal = 0;
  }
  var match = Math.round(bestScore / 3 * 100);
  document.getElementById('results').innerHTML += "<br>Best score is " + bestScore + " so your animal is "
  + animalData[bestAnimal].name + ". Your match is: " + match + "%";

  localStorage.setItem('savedAnimal', animalData[bestAnimal].name);
}


var fetchUserName = () => {
  //gets saved user name from local storage
  var savedName = localStorage.getItem("savedName");
  var savedAnimal = localStorage.getItem("savedAnimal");
  document.getElementById('name-here').innerHTML = "The saved name is "
  + savedName + ". Your previous animal was " + savedAnimal + ".";
}
