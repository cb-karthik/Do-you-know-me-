const { log } = require('console');
var readlineSync = require('readline-sync');
var score = 0;
var un = readlineSync.question("What is your Name!? ");
console.log("Welcome " + un + " to, Do you know about karthik?, Fun quizz!!!");
console.log("------------------------")



function qa(question, answer) {
  var ua = readlineSync.question(question);
  if (ua == answer) {

    console.log("Bingooo !! You are answered correctly.!!! ")
    score = score + 1
  }
  else {
    console.log("Wrong Answer.")
    score = score - 1;
  }
  console.log("Your score is:  " + score)
  console.log("------------------------")
}

// qa(" 1.Where do I live?   : ", 'mysuru'); 

var qns = [{
  question: "1.Where do I Live ? ",
  answer: "mysuru"
}, {
  question: "2.My favorite colour ? ",
  answer: "yellow"
}, {
  question: "3.My favorite food ? ",
  answer: "pizza"
},
{
  question: "4.which course i am pursuing ? ",
  answer: "phd"
}, {
  question: "5.My favorite sport ? ",
  answer: "criket"
}
];

for (var i = 0; i < qns.length; i++) {
  var cq = qns[i]
  qa(cq.question, cq.answer)

}
console.log("You answered all the questions, your final score is:", + score, "Thank you soo much.");