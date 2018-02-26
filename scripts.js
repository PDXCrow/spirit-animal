var checkForSaved = () => {
  if (localStorage.getItem("savedName")) {
    document.getElementById("name-field").style.visibility= 'hidden';
    var savedName = localStorage.getItem("savedName");
    var savedAnimal = localStorage.getItem("savedAnimal");
    document.getElementById('intro-text').innerHTML = "Welcome back "
    + savedName + "! You previously took the Spirit Animal test and were matched with "
    + savedAnimal + ". How about taking the test again?";
  }
}

var clearUser = () => {
  localStorage.removeItem("savedName");
}

//default user choices all start as true;
var userChoice = {
  big: 'true',
  aggressive: 'true',
  flying: 'true',
  herd: 'true',
  smart: 'true',
  carnivore: 'true'
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
    flying: 'true',
    herd: 'true',
    smart: 'true',
    carnivore: 'true'
  },
  {
    name: 'Slug',
    big: 'false',
    aggressive: 'false',
    flying: 'false',
    herd: 'false',
    smart: 'false',
    carnivore: 'false'
  },
  {
    name: 'Eagle',
    big: 'true',
    aggressive: 'true',
    flying: 'true',
    herd: 'false',
    smart: 'true',
    carnivore: 'true'
  },
  {
    name: 'Giraffe',
    big: 'true',
    aggressive: 'false',
    flying: 'false',
    herd: 'true',
    smart: 'false',
    carnivore: 'false'
  },
  {
    name: 'T-Rex',
    big: 'true',
    aggressive: 'true',
    flying: 'false',
    herd: 'false',
    smart: 'false',
    carnivore: 'true'
  },
  {
    name: 'Robin',
    big: 'false',
    aggressive: 'false',
    flying: 'true',
    herd: 'false',
    smart: 'false',
    carnivore: 'false'
  },
  {
    name: 'Salmon',
    big: 'false',
    aggressive: 'false',
    flying: 'false',
    herd: 'true',
    smart: 'false',
    carnivore: 'false'
  },
  {
    name: 'Mosquito',
    big: 'false',
    aggressive: 'true',
    flying: 'true',
    herd: 'true',
    smart: 'false',
    carnivore: 'true'
  }
]

var findAnimal = () => {
  //get user name from input field
  var userName = document.getElementById("inputName").value;
  if (userName != '') { //if not blank, show that name has been captured and store locally
      document.getElementById('results').innerHTML = "Thanks for answering the questions, "
      + userName + ".";
      localStorage.setItem('savedName', userName)
    } else if (localStorage.getItem("savedName") == null) { //if blank and no saved user, alert user
    alert('Name field cannot be blank. Please enter your name before submitting.')
  }
  var bigResult = document.getElementsByName('big');
  if (bigResult[1].checked) {
    userChoice.big = 'false';
  }
  var aggressiveResult = document.getElementsByName('aggressive');
  if (aggressiveResult[1].checked) {
    userChoice.aggressive = 'false';
  }
  var flyingResult = document.getElementsByName('flying');
  if (flyingResult[1].checked) {
    userChoice.flying = 'false';
  }
  var herdResult = document.getElementsByName('herd');
  if (herdResult[1].checked) {
    userChoice.herd = 'false';
  }
  var smartResult = document.getElementsByName('smart');
  if (smartResult[1].checked) {
    userChoice.smart = 'false';
  }
  var carnivoreResult = document.getElementsByName('carnivore');
  if (carnivoreResult[1].checked) {
    userChoice.carnivore = 'false';
  }
  //test answers vs. animals
  for (var i = 0; i < animalData.length; i++) {
    if (animalData[i].big === userChoice.big) {
      currentScoreTotal += 1;
    }
    if (animalData[i].aggressive === userChoice.aggressive) {
      currentScoreTotal += 1;
    }
    if (animalData[i].flying === userChoice.flying) {
      currentScoreTotal += 1;
    }
    if (animalData[i].herd === userChoice.herd) {
      currentScoreTotal += 1;
    }
    if (animalData[i].smart === userChoice.smart) {
      currentScoreTotal += 1;
    }
    if (animalData[i].carnivore === userChoice.carnivore) {
      currentScoreTotal += 1;
    }
    if (currentScoreTotal > bestScore) {
      bestScore = currentScoreTotal;
      bestAnimal = i;
    }
    currentScoreTotal = 0;
  }
  var match = Math.round(bestScore / 6 * 100);
  document.getElementById('results').innerHTML += "<br>We've determined that your best Spirit Animal is the "
  + animalData[bestAnimal].name + ". Your match was: " + match + "%";

  localStorage.setItem('savedAnimal', animalData[bestAnimal].name);
}


var fetchUserName = () => {
  //gets saved user name from local storage
  var savedName = localStorage.getItem("savedName");
  var savedAnimal = localStorage.getItem("savedAnimal");
  document.getElementById('name-here').innerHTML = "The saved name is "
  + savedName + ". Your previous spirit animal was " + savedAnimal + ".";
}
