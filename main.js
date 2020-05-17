const player1 = "X";
const player2 = "O";
var spacesEmpty = 9;
var playTime;
var gameOver = false;
var winner;


function randomPlayer(){
  i = Math.floor(Math.random() * 2);
  if (i==0){
    playTime = player1;
  } else {
    playTime = player2;
  }
}

function updateRound(){
  if (gameOver){return;}
  if (playTime === player1){
  document.getElementById("player").innerHTML="X";
  }
  if (playTime === player2) {
  document.getElementById("player").innerHTML="O";
  }
}
function spaces(){
  var s = document.getElementsByClassName('positions');
  for (var i = 0; i < s.length; i++){
    s[i].addEventListener('click',function(){
      if (gameOver){return;}
      if (this.innerText == ""){
        if(playTime===player1){
          this.innerText = "X";
          this.setAttribute("play", player1);
          playTime = player2;
        }
        else{
          this.innerText = "O";
          this.setAttribute("play", player2); 
          playTime = player1;
        }
        updateRound()
        win()
        checkGameState()
      }
    })
 }
}
function gameStarted(){
  document.getElementById('divWhoStart').innerText = "Vez de:"
  document.getElementById('start').style.visibility='hidden';
}
function win(){
  var a1 = document.getElementById("a1").getAttribute("play");
  var a2 = document.getElementById("a2").getAttribute("play");
  var a3 = document.getElementById("a3").getAttribute("play");
  
  var b1 = document.getElementById("b1").getAttribute("play");
  var b2 = document.getElementById("b2").getAttribute("play");
  var b3 = document.getElementById("b3").getAttribute("play");
  
  var c1 = document.getElementById("c1").getAttribute("play");
  var c2 = document.getElementById("c2").getAttribute("play");
  var c3 = document.getElementById("c3").getAttribute("play");
  var winner= "";
  
  if((a1 == a3 && a1 == a2 && a1 != "") ||
  (a1 == b1 && a1 == c1 && a1 != "") ||
  (a1 == b2 && a1 == c3 && a1 != "") ){
    winner = a1;
  }
  else if ((b2 == a3 && b2 == c1 && b2 != "") ||
  (b2 == a2 && b2 == c2 && b2 != "") ||
  (b2 == b1 && b2 == b3 && b2 != "") ){
    winner = b2;
  }
  else if ((c3 == c1 && c3 == c2 && c3 != "") ||
  (c3 == a3 && c3 == b3 && c3 !="")){
    winner = c3;
  }
  if (winner!=""){
    gameOver = true;
    document.getElementById('divWhoStart').innerText="";
    document.getElementById('player').innerText="Vencedor: "+winner;
   document.getElementById('start').style.visibility='visible'
   document.getElementById('start').innerText="Jogar Novamente";
  }
    
}  

function checkGameState(){
  --spacesEmpty;
  console.log(spacesEmpty);
  if(spacesEmpty == 0 || winner == "" ){
    tie();
  }
    
}
function tie(){
  document.getElementById('divWhoStart').innerText = "";
  document.getElementById('player').innerText = "Empate";
  document.getElementById('start').style.visibility='visible';
  document.getElementById('start').innerText="Jogar Novamente";
  
}
 function clear() {
   r = document.getElementsByClassName("positions");
   for (var i = 0; i < r.length; ++i) {
     r[i].innerText = "";
     r[i].getAttribute("play","");
   }
   document.getElementById('player').innerText =""; 
   gameOver=false;
   spacesEmpty = 9;
 }
start = function (){
  clear()
  randomPlayer()
  spaces()
  updateRound ()
  gameStarted ()
}
