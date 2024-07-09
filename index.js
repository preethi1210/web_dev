const choices=['rock','paper','scissors'];
const dis1=document.getElementById("dis1");
const dis2=document.getElementById("dis2");
const dis3=document.getElementById("dis3");
let playerscore=0;
let computerscore=0;
function playgame(playerchoice) {
    const computerchoice=choices[Math.floor(Math.random()*3)];
    let res="";
    if(playerchoice===computerchoice){
        res="It's a Tie";
    }
    else{
        switch(playerchoice){
            case "rock":
                res=(computerchoice==="scissors")? "You Win" :"You Lose";
                break;
            case "scissors":
                res=(computerchoice==="rock")? "You Lose" :"You Win";
                break;  
            case "paper":
                res=(computerchoice==="scissors")? "You Lose" :"You Win";
                break;               
        }
    }
    dis1.textContent=`PLAYER:${playerchoice}`;
    dis2.textContent=`COMPUTER:${computerchoice}`;
    dis3.textContent=res;
    dis3.classList.remove("greenText","redText");
    switch(res){
        case "You Win":
            dis3.classList.add("greenText");
            playerscore++;
            playerscoredis.textContent=playerscore;
            break;
        case "You Lose":
            dis3.classList.add("redText");
            computerscore++;
            computerscoredis.textContent=computerscore;
            break;
    }
}