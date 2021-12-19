var score = 0;

function Update_the_score(){
    score = score + 1;
    document.getElementById("Score").innerHTML = "Score : " +  score;
}

function Save_Score(){
    localStorage.setItem("Score", score);
}

function Next_Page(){
    window.location = "activity_2.html";
}