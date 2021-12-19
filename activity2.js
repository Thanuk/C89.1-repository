function get_score(){
    score = localStorage.getItem("Score");
    document.getElementById("update").innerHTML = "<h1> Score : " + score + "</h1>";
}

function redirect_to_first_page(){
    window.location = "activity_1.html";
}