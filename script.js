let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const winMsg=document.querySelector("#msg");

const userScoreSpan=document.querySelector("#user-score");
const computerScoreSpan=document.querySelector("#computer-score");

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}





playGame = (userChoice) => {
    const computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        winMsg.innerText="It's Tie !";
        winMsg.style.backgroundColor='#53a0ff';
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        winMsg.innerText=`You win! `;
        winMsg.style.backgroundColor='green';
        userScore++;
        
    } else {
        computerScore++;
        winMsg.innerText=`you lose`;
        winMsg.style.backgroundColor='red';
    }userScoreSpan.innerText=`${userScore}`;
    computerScoreSpan.innerText=`${computerScore}`;

}



choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        playGame(userChoice);
    })
})