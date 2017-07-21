
var questionsList = ["What are your/your friend's favorite foods?", "What are your/your friend's favorite animals?"];

function init() {
  var randomIndex = Math.floor(Math.random() * questionsList.length);
  document.getElementById("question").innerHTML = questionsList[randomIndex];
}

window.onload = init;

var answerList = [];
function submitAnswer() {
  var a = document.getElementById('answerInput').value;
  console.log(a);
  answerList.push(a);
  console.log(answerList);
}

function checkGuess() {
  var x = document.getElementById('guessInput').value;
  console.log(x);
  for (var i = 0; i < answerList.length; i++){
    if (x == answerList[i]){
      alert("Correct! Wow, you really must know your friend :O");
  // console.log(""); = alert("");
    }
  }
}
