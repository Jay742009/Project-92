

player1_name = localStorage.getItem("player1_name_input");
player2_name = localStorage.getItem("player2_name_input");


document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";


document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;


player1_score=0;
player2_score=0;


document.getElementById("player1_score").innerHTML =player1_score;
document.getElementById("player2_score").innerHTML =player2_score;


 function send(){

 getword=document.getElementById("word").value;
 Word=getword.toLowerCase();

 char1 = Word.charAt(1);

 length_char = Math.floor(Word.length/2);//middle word
 char2 = Word.charAt(length_char);//fetching the 2 charachter

 end_char = Word.length-1;//taking length of word and taking the last word by subtracting 1
 char3 = Word.charAt(end_char);//fetching the last charachter

 r1 = Word.replace(char1,"_");
 r2 = r1.replace(char2,"_");
 r3 = r2.replace(char3,"_");

 question_word = "<h4 id='word_display'> Q. "+r3+"</h4>";
 input_box = "<br>Answer : <input type='text' id='input_check_box'>";
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
 row = question_word + input_box + check_button ;
 document.getElementById("output").innerHTML = row;
 document.getElementById("word").value = "" ;


}

question_turn="player1";
answer_turn="player2";

function check(){

    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();

    if(answer == Word){

      if(answer_turn == "player1"){

        player1_score=player1_score +1;
        document.getElementById("player1_score").innerHTML=player1_score;
      }

      else{
     
        player2_score=player2_score +1;
        document.getElementById("player2_score").innerHTML=player2_score;
      }
        
    }

    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name; 
        
    }

    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name; 
        
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name; 
        
    }

    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name; 
        
    }

    document.getElementById("output").innerHTML = "";

}