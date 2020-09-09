/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */

'use strict';
// // greeting prompt
var userName =prompt('what is you name?');
alert('greeting Mr/Mrs :' + userName);
confirm('let\'s make a quick quiz please answer with yes,no or y,n');
// // question1
// eslint-disable-next-line no-unused-vars
var score= 0;
function yearQuestion() {
  var year = prompt('Did i graduate in 2019?');
  year= year.toLowerCase();
  if(year === 'y'|| year === 'yes') {
    alert('correct i graduated in 2019');
    // eslint-disable-next-line no-unused-vars
    score=score+1;
    console.log('correct i graduated in 2019');
  }else{
    alert('wrong i graduated in 2019');
    console.log('wrong i graduated in 2019');
  }
}
yearQuestion();

// // question2
function studyQuestion() {
  var study = prompt('Am i a doctor?');
  study=study.toLowerCase();
  if(study ==='n'||study==='no'){
    alert('correct i am not a doctor');
    score=score+1;
    console.log('correct i am not a doctor');
  }else{
    alert('wrong i am an engineer');
    console.log('wrong i am an engineer');
  }
}
studyQuestion();

// // question3
function ageQuestion() {
  var age =prompt('am i 24 years?');
  age=age.toLowerCase();
  if(age ==='yes' || age ==='y'){
    alert('correct i am 24 years old');
    score=score+1;
    console.log('correct i am 24 years old');
  }else{
    alert('wrong,i am 24 years old');
    console.log('wrong,i am 24 years old');
  }
}
ageQuestion();

// // question 4
function excelQuestion() {
  var excel= prompt('do i have an ICDL certificate ?');
  excel=excel.toLowerCase();
  if(excel ==='no'||excel==='n'){
    alert('wrong i have an ICDL certificate');
    console.log('wrong i have an ICDL certificate');
  }else{
    alert('correct i have ICDL certificate');
    score=score+1;
    console.log('correct i have ICDL certificate');
  }
}
excelQuestion();

// // question5
function jordanQuestion() {
  var jordan= prompt('am i jordanion?');
  jordan=jordan.toLowerCase();
  if(jordan ==='n'||jordan==='no'){
    alert('wrong i am jordanion');
    console.log('wrong i am jordanion');
  }else{
    alert('correct i am jordanion');
    score=score+1;
    console.log('correct i am jordanion');
  }
}
jordanQuestion();

// // greetings
alert('Welcome Mr/Mrs' + name + ' to my website i think now you know me more');

// question 6
function favNumber() {
  for (var i = 0; i < 4; i++) {
    var favNum = prompt('what is my favorite number?');
    // eslint-disable-next-line no-unused-vars
    favNum = Number(favNum);
    if (favNum === 20) {
      alert('that\'s right you are awesome');
      score=score+1;
      break;
    }
    else if (favNum > 20) {
      alert('wrong too high try again');

    }
    else {
      alert('wrong too low try again');

    }
  } alert('the correct answer is:20');
}
favNumber();

// questoion 7
function placesFun() {
  // eslint-disable-next-line no-unused-vars
  var places = ['malaysia', 'france', 'germany', 'italy', 'indonisia', 'maldives', 'greece', 'spain', 'thailand', 'brazil'];
  // this loop to count the numbers of trying.
  // boolean -> false
  var boolean ='false';
  for (var a = 0; a < 6; a++) {
  // to let the user enter a variable
  // eslint-disable-next-line no-unused-vars
    var userInput = prompt('what is my top place that i want to visit?'); userInput.toLowerCase();
    // this loop to see inside the array
    for (var b = 0; b < places.length; b++) {

      // if to see if the user enter one of the values that is inside the array
      if (userInput === places[b]) {
        var boolean='true';
        alert('correct it\'s one o the places that i dream to visit');
        score=score+1;
        break;
      }

    }
    if(boolean ==='true'){
      break;
    }
  }

  alert('my favorite places that i dream to visit are:malaysia,france,germany,italy,indonisia,maldives,greece,spain,thailand,brazil');
}
placesFun();

alert('let\'s see how mush you get you\'r score = ' + score +' out of 7');





