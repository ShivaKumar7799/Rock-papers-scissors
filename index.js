let computer= ["rock", "paper", "scissor"]
let win = 0;
let lose = 0;
let result = document.getElementById('result');
let selector = document.getElementById('selector');

function rock(){
        let randomNum = parseInt(Math.random() * 3);
        let rock = document.getElementById("rock").value;
        console.log("computer selected",computer[randomNum])
        
        if(rock == computer[randomNum]){
                result.innerHTML = "Match is Drawn";
                selector.innerHTML = "you selected rock computer selected " + computer[randomNum];

        } else if("scissor" == computer[randomNum]){
                win++;
                document.getElementById('count').innerHTML = "You :" + win;
                result.innerHTML = "You Win";
                selector.innerHTML = "you selected rock computer selected " + computer[randomNum];
        } else{
                lose++;
                document.getElementById('loser').innerHTML = "Computer :" + lose;
                result.innerHTML = "You Lose"
                selector.innerHTML = "you selected rock computer selected " + computer[randomNum];
        }
}
function paper(){
        let randomNum = parseInt(Math.random() * 3);
        let paper = document.getElementById("paper").value;
        console.log("computer selected",computer[randomNum])
        
        if(paper == computer[randomNum]){
                document.getElementById('result').innerHTML = "Match is Drawn";
                selector.innerHTML = "you selected paper computer selected " + computer[randomNum];

        } else if("rock" == computer[randomNum]){
                win++;
                document.getElementById('count').innerHTML = "You :" + win;
                result.innerHTML = "You Win";
                selector.innerHTML = "you selected paper computer selected " + computer[randomNum];
        } else{
                lose++;
                document.getElementById('loser').innerHTML = "Computer :" + lose;
                result.innerHTML = "You Lose"
                selector.innerHTML = "you selected paper computer selected " + computer[randomNum];
        }
}
function scissor(){
        let randomNum = parseInt(Math.random() * 3);
        let scissor = document.getElementById("scissor").value;
        console.log("computer selected",computer[randomNum])
        
        if(scissor == computer[randomNum]){
                document.getElementById('result').innerHTML = "Match is Drawn";
                selector.innerHTML = "you selected scissor computer selected " + computer[randomNum];

        } else if("rock" == computer[randomNum]){
                lose++;
                document.getElementById('loser').innerHTML = "Computer :" + lose;
                result.innerHTML = "You Lose";
                selector.innerHTML = "you selected scissor computer selected " + computer[randomNum];
        } else{
                win++;
                document.getElementById('count').innerHTML = "You :" + win;
                result.innerHTML = "You Win"
                selector.innerHTML = "you selected scissor computer selected " + computer[randomNum];
        }
}