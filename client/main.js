/*
    ELIZA Meteor Template Created by CHEN, Tsung-Ying
    for the NTHU course "Basic Web Linguistic Application Development"
    Last Updated on Oct 2, 2018
*/

var name1 = "Jessica", name2 = "Jason", name3 = "Tom";
var msg1 = "How are you?", msg2 = "Hey, man!", msg3 = "Blah!";
var age1 = 18, age2 = 40, age3 = 22;

var response = function(name, msg) {
  if(msg === "How are you?") {
    console.log("Good. How are you, "+name);
  }
  else {
    console.log("Go away, "+name);
  }
};

response(name1, msg1);
response(name2, msg2);
response(name3, msg3);

var ageComment = function(name, age) {
  if(age < 20) {
    console.log(name+", you're so young!");
  }
  else {
    console.log(name+", you're an adult!");
  }
};

ageComment(name1, age1);
ageComment(name2, age2);
ageComment(name3, age3);

/*var adding = function(x, y) {
  let result = x + y;
  return result;
};

var finalResult = adding(3, 5);
console.log("The result is "+finalResult);*/

/*var sayHi = function() {
  console.log("Hello!");
};

sayHi();*/

/*var result = 0;

for(let num=1 ; num <= 100 ; num++) {
  result = result + num;
}

console.log(result);*/

/*for(let age=0 ; age < 100 ; age++) {
  if(age === 0) {
    console.log(age+" : Welcome to the world!");
  }
  else if(age === 25) {
    console.log(age+" : You're so energetic!");
  }
  else if(age === 75) {
    console.log(age+" : You've changed a lot.");
  }
  else if(age === 99) {
    console.log(age+" : Your time has come."); //QQ
  }
}*/

/*var x = 5, y = 10;

if(x > y) {
  let result = x * y;
  console.log(result);
}
else {
  let result = x / y;
  console.log(result);
}*/

/*{
  let localVar = "I'm invisible somewhere!";  
  console.log(localVar);
  var globalVar = "I'm everywhere!";
}
console.log(globalVar);*/

