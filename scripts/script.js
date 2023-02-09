const userChoice = '';
const compChoice = '';

const userScoreElement = document.querySelector('.user-score');
const compScoreElement = document.querySelector('.comp-score');

let userScore = 0;
let compScore = 0;

const getCompChoice = function(){
    const randomNumber = Math.floor(Math.random()*3)+1;

    if(randomNumber === 1){
        return 'rock'
    }else if (randomNumber === 2){
        return 'paper'
    }else if (randomNumber === 3){
        return 'scissors'
    }
}

const getUserChoice = function(userChoice){
    return userChoice;
};

const playGame = function(weapon){
    const user = weapon;
    const comp = getCompChoice();

    const result = getResult(user,comp);

    if(result === "WON"){
        userScore = userScore + 1;
    }else if (result === "LOST"){
        compScore = compScore + 1;
    }
    userScoreElement.innerText = userScore;
    compScoreElement.innerText = compScore;

document.querySelector('.User-choice').innerText=`User selected ${user}`;
document.querySelector('.Comp-choice').innerText=`Computer selected ${comp}`;
document.querySelector('.Final-result').innerText=`The result is ${result}`;

}

const getResult = function(userChoice,compChoice){

    if(userChoice === 'rock'){
        if(compChoice ==='rock'){
    return 'DRAW'
        }
        else if(compChoice ==='paper'){
    return 'LOST'
        }else if(compChoice ==='scissors'){
    return 'WON'
        }
    }else if(userChoice ==='paper'){
        if(compChoice ==='rock'){
            return 'WON'
        }
        else if(compChoice ==='paper'){
            return 'DRAW'
        }else if(compChoice ==='scissors'){
            return 'LOST'
        }
    }else if(userChoice ==='scissors'){
        if(compChoice ==='rock'){
            return 'LOST'
        }
        else if(compChoice ==='paper'){
            return 'WON'
        }else if(compChoice ==='scissors'){
            return 'DRAW'
        }
    }
}
