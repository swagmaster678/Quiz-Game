var score = 0;
var highscore = localStorage.getItem("highscore", 0);

if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);      
    }
}
else{
    localStorage.setItem("highscore", score);
}