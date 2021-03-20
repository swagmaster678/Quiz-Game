let win = 0;
let loss = 0;
let count = 30;
let currentQ = 0;
let currentScore = 0;
let name = prompt("What is your name?");


function update(currentQ) {
document.getElementById('A').innerHTML = quizQuestion[currentQ].answers.A;
document.getElementById('B').innerHTML = quizQuestion[currentQ].answers.B;
document.getElementById('C').innerHTML = quizQuestion[currentQ].answers.C;
document.getElementById('D').innerHTML = quizQuestion[currentQ].answers.D;
document.getElementById('questionLine').innerHTML = quizQuestion[currentQ].question;

}

function reappear(y) {
  let x = document.getElementById(y);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  
  }


let interval = setInterval(function(){
  document.getElementById('tCount').innerHTML=count;
  count--;
  if (count <= 0) {
    document.getElementById('scoreKeep').innerHTML = `${currentScore}/5`
    reappear("deezbtns");
    reappear("scoreKeep");
    clearInterval(interval);
    document.getElementById('tCount').innerHTML='Done';
  }
}, 1000);


function start_game(){
count = 90;
update(currentQ);
reappear("scoreKeep");


// reappear("deezbtns");

} 

let l = ['A', 'B', 'C', 'D']
  for (let i = 0; i < l.length;i++)
  {
    document.getElementById(l[i]).onclick = function() {
      if ( l[i] === quizQuestion[currentQ].correctAnswer){
        currentScore++;
      }
      else {
        count-=10;
      }
      if (++currentQ === 5 ){
        count = 1;
        // document.getElementById('scoreKeep').innerHTML = `${currentScore}/5`
        // reappear("deezbtns");
      }
      else {
        update(currentQ);
      }
      
    }
};


//let l = ['A','B','C','D']
// for (let i=0; i < l.length; i++){



start_game();