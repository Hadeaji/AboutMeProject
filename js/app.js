'use strict'


function start(){
var name = prompt('My First name is Mohammad?').toLowerCase()
console.log(name);

if(name == 'yes' || name == 'y' ){
    alert('Actully No, My name is Mohammad Hadi');
} else if(name == 'no' || name == 'n'){
    alert('You guessed it right, My name is Mohammad Hadi');
} else {
    alert('it is ok if you dont want to play')
}



var ami = prompt('Am i a foreigner?').toLowerCase()
console.log(ami);

if(ami == 'yes' || ami == 'y'){
    alert('Yes Actully I am a Syrian foreigner');
} else if(ami == 'no' || ami == 'n'){
    alert('I Have Never Wished To Step Inside This Land, Ever');
} else {
    alert('Why did you press on the start game if you dont want to play?')
}



var xp = prompt('Do i look like i am have work experience?').toLowerCase()
console.log(xp);

if(xp == 'yes' || xp == 'y'){
    alert('Uhhh, Thank you, I have worked in several places and positions');
} else if(xp == 'no' || xp == 'n'){
    alert('WELL SORRY If I Dont Look Like I Do');
} else {
    alert('Really? Is it hard to spam (y) or (n) at least?')
}



var place = prompt('Do you think i was in a university?').toLowerCase()
console.log(place);

if(place == 'yes' || place == 'y'){
    alert('Sadly No mate i was in a collage ');
} else if(place == 'no' || place == 'n'){
    alert('You guessed it right, i was in a collage');
} else {
    alert('I have nothing to say')
}



var enj = prompt('So ' + user + ' Did you enjoy the game?').toLowerCase()
console.log(name);

if(enj == 'yes' || enj == 'y'){
    alert('Enough bluffing ' + user + ' I know you didn\'t but Thanks a lot');
} else if(enj == 'no' || enj == 'n'){
    alert('Well Then ' + user + ' Keep Your opinion For Yourself XD');
} else {
    alert('Read It by Yourself ' +user )
}

var myElement = document.querySelector("#p");
myElement.style.display = "table";


}