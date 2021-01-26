function addUser(){


    Name_1=document.getElementById("player1_name_input").value;
    Name_2=document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name_input",Name_1);
    localStorage.setItem("player2_name_input",Name_2);

    window.location = "game_page.html";

}