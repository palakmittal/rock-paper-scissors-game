let userScore=0;
let compScore=0;

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
  };

  const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  };  

  const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };

const playGame= (userChoice)=>{
    const compChoice=genCompChoice();
    console.log("userChoice= ",userChoice);
    console.log("compChoice= ",compChoice);
    
    if(userChoice===compChoice){
        //it means the game is draw
        drawGame();
    }else{
        let userWin=true;
        if (userChoice==="rock"){
            // rock can be defeated by paper
            userWin= (compChoice==="scissors")?true:false;
        }else if(userChoice==="paper"){
            // paper can be defeated by scissors
            userWin= (compChoice==="scissors")?false: true;
        }else{
            // that means user chose scissors so can be defeated by rock
            userWin= (compChoice==="paper")?false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked");
        playGame(userChoice);
    });
});











