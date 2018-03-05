var checkForSaved = () => {
  /*
  Check for existing saved user name, deliver past results if available
  and hide name input field
  */
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
  //test function to clear existing user name
  localStorage.removeItem("savedName");
}

//default user answers, all start as true
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

//animal data objects in array
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
    name: 'Snail',
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
    name: 'Lion',
    big: 'true',
    aggressive: 'true',
    flying: 'false',
    herd: 'true',
    smart: 'false',
    carnivore: 'true'
  },
  {
    name: 'Finch',
    big: 'false',
    aggressive: 'false',
    flying: 'true',
    herd: 'false',
    smart: 'false',
    carnivore: 'false'
  },
  {
    name: 'Fish',
    big: 'false',
    aggressive: 'false',
    flying: 'false',
    herd: 'true',
    smart: 'false',
    carnivore: 'false'
  },
  {
    name: 'Dragonfly',
    big: 'false',
    aggressive: 'true',
    flying: 'true',
    herd: 'true',
    smart: 'false',
    carnivore: 'true'
  }
]

var findAnimal = () => {
  //grab user answers, score against animal objects in array, produce best match
  var userName = document.getElementById("inputName").value; //get user name from input field
  if (userName != '') {
    //if not blank, thank user and store name locally
      document.getElementById('results').innerHTML = "Thanks for answering the questions, "
      + userName + ".";
      localStorage.setItem('savedName', userName)
    } else if (localStorage.getItem("savedName") == null) {
      //if blank and no saved user, alert user
    alert('Name field cannot be blank. Please enter your name before submitting.')
  }
  //any user choices that are false are changed in default answers
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
  //test user answers vs. animal data and score
  for (var i = 0; i < animalData.length; i++) {
    //add 1 to score of current animal for every trait that matches
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
      //if this animal's total score is better than previous best match, capture this as best animal
      bestScore = currentScoreTotal;
      bestAnimal = i;
    }
    currentScoreTotal = 0; //reset score for next animal to be tested
  }
  //deliver winning animal data
  var match = Math.round(bestScore / 6 * 100);
  document.getElementById('results').innerHTML += "<br>We've determined that your best Spirit Animal is the "
  + animalData[bestAnimal].name + ". Your match was: " + match + "%";


  //store best animal match locally
  localStorage.setItem('savedAnimal', animalData[bestAnimal].name);

  displayAnswer();

  document.getElementById("findButton").style.visibility= 'hidden';

}

/*
var fetchUserName = () => {
  //test function that gets saved user name from local storage
  var savedName = localStorage.getItem("savedName");
  var savedAnimal = localStorage.getItem("savedAnimal");
  document.getElementById('name-here').innerHTML = "The saved name is "
  + savedName + ". Your previous spirit animal was " + savedAnimal + ".";
}
*/

var displayAnswer = () => {
  document.getElementById('main-content').innerHTML = '<img class="answer-image" src="images/' + animalData[bestAnimal].name + '.png">';
}
