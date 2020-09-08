'use strict';

var Q1 =0;
var Q2 =0;
var Q3 =0;
var Q4 =0;
var Q5 =0;
var Q6 =0;
var Q7 =0;


function guess() {
  var lucknum = 19;
  console.log(lucknum);
  console.log(usernum);
  // Q6
  for (var i = 1; i <= 4; i++) {
    var usernum = prompt('Guess The Number!');
    usernum = Number(usernum);

    if (usernum < lucknum) {
      alert('Your Number Is Lower');
    } else if (usernum > lucknum) {
      alert('Your Number Is higher');
    } else if (usernum == lucknum) {
      alert('You are correct');
      Q6 = 1;
      console.log(Q6);
      break;
    }
  }

  if (usernum !== lucknum) {
    alert('I\'m Sorry But You Had Your Chances, The Right Answer IS 19');
  }

}


function active() {
  var act = ['blue', 'black', 'gray'];
  console.log(act);
  console.log(useractinput);
  // Q7


  for (var count = 1; count <= 6; count++) {
    var useractinput = prompt('Guess One Of My Favorite Colors');
    useractinput = String(useractinput).toLowerCase();

    for (var i = 0; i <= act.length; i++) {
      if (useractinput === act[i]) {
        alert('You Are Correct');
        //   return;
        Q7 = 1;
        console.log(Q7);
        count = 7;
        break;
      }
    }
    if(count < 6){alert('Sorry You Are Misstaken');
    }
    if(count == 6){alert('Sorry You Are Misstaken The Right Aswers Are Black, Blue and Gray');
    }
  }
}


function start() {
  // Q1
  var name = prompt('My First name is Mohammad?').toLowerCase();
  console.log(name);

  if (name == 'yes' || name == 'y') {
    alert('Actully No, My name is Mohammad Hadi');
  } else if (name == 'no' || name == 'n') {
    alert('You guessed it right, My name is Mohammad Hadi');
    Q1 = 1;
    console.log(Q1);
  } else {
    alert('it is ok if you dont want to play');
  }


  // Q2
  var ami = prompt('Am i a foreigner?').toLowerCase();
  console.log(ami);

  if (ami == 'yes' || ami == 'y') {
    alert('Yes Actully I am a Syrian foreigner');
    Q2 = 1;
    console.log(Q2);
  } else if (ami == 'no' || ami == 'n') {
    alert('I Have Never Wished To Step Inside This Land, Ever');
  } else {
    alert('Why did you press on the start game if you dont want to play?');
  }


  // Q3
  var xp = prompt('Do i look like i am have work experience?').toLowerCase();
  console.log(xp);

  if (xp == 'yes' || xp == 'y') {
    alert('Uhhh, Thank you, I have worked in several places and positions');
    Q3 = 1;
    console.log(Q3);
  } else if (xp == 'no' || xp == 'n') {
    alert('WELL SORRY If I Dont Look Like I Do');
  } else {
    alert('Really? Is it hard to spam (y) or (n) at least?');
  }


  // Q4
  var place = prompt('Do you think i was in a university?').toLowerCase();
  console.log(place);

  if (place == 'yes' || place == 'y') {
    alert('Sadly No mate i was in a collage ');
  } else if (place == 'no' || place == 'n') {
    alert('You guessed it right, i was in a collage');
    Q4 = 1;
    console.log(Q4);
  } else {
    alert('I have nothing to say');
  }


  // Q5
  var enj = prompt('So ' + user + ' Did you enjoy the game?').toLowerCase();
  console.log(name);

  if (enj == 'yes' || enj == 'y') {
    alert('Good for You ' + user + ' I wish i can say that about making it');
    Q5 = 1;
  } else if (enj == 'no' || enj == 'n') {
    alert('Well Then ' + user + ' Keep Your opinion For Yourself XD');
    Q5 = 1;
    console.log(Q5);
  } else {
    alert('Read It by Yourself ' + user);
  }

  var myElement = document.querySelector('#p');
  myElement.style.display = 'table';


}

function scoree(){
    var score = Q1 + Q2 + Q3 + Q4 + Q5 + Q6 + Q7;
  alert('Your Final Score Till Now Is ' + score + ' Out Of 7');
}
