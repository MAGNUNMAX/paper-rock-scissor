let contPl1 = 0;
let contPl2 = 0;

function game(){

    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissor = document.getElementById('scissor');
    const mainShow = document.getElementsByClassName('main');
    const player1Score = document.querySelector('.scoreL');
    const player2Score = document.querySelector('.scoreR');
    const img1 = document.querySelector('#show1');
    const compImg2 = document.querySelector('#show2');
    const boton = document.querySelector('#boton');
    const text1 = document.querySelector('.text1');
    const text2 = document.querySelector('.text2');
    const notice = document.querySelector('#noticeh3');
    
    let rockPL = null;
    let paperPL = null;
    let scissorPL = null;
    let ranRock = null;
    let ranPaper = null;
    let ranScissor = null;

    text1.style.display = 'block';
    text2.style.display = 'block';
    

    function randomImage(computerRandom){
        let compImg;
        switch(computerRandom){
        case 0:
            compImg = '<img id="rock" src="/img/rock.png" alt="rock">';
            ranRock = 0;
            break;
        case 1:
            compImg ='<img id="paper" src="/img/paper.png" alt="paper">';
            ranPaper = 1;
            break;
        case 2:
            compImg = '<img id="scissor" src="/img/scissor.png" alt="scissor">';
            ranScissor = 2;
            break;
        }
        return compImg;
    }

    function comparation(playerChoice, computerChoice){
        if (playerChoice === computerChoice) {
            text1.textContent = 'WOW is Tie';
            text2.textContent = 'WOW is Tie';
        } else if ((playerChoice === 0 && computerChoice === 2) || 
                   (playerChoice === 1 && computerChoice === 0) || 
                   (playerChoice === 2 && computerChoice === 1)) {
            contPl1 += 1;
            text1.textContent = 'Point';
            player1Score.textContent = contPl1;
            text2.textContent = '';
        } else {
            contPl2 += 1;
            text1.textContent = '';
            text2.textContent = 'Point';
            player2Score.textContent = contPl2;
        }
        checkWinner();
    }
    function checkWinner() {
        if (contPl1 === 3 || contPl2 === 3) {
            boton.style.display = 'block';
            rock.style.display = 'none';
            paper.style.display = 'none';
            scissor.style.display = 'none';
            text1.textContent = contPl1 === 3 ? 'Player  wins!' : 'Computer wins!';
            text2.textContent = '';
            notice.style.display ='none';
        }
    }

    

    rock.addEventListener('click',()=>{
        img1.innerHTML= '<img id="rock" src="/img/rock.png" alt="rock">';
        rockPL = 0;
        
        setTimeout(()=>{
            let computerRandom = Math.floor(Math.random()*3);
            const compImg = randomImage(computerRandom);
            compImg2.innerHTML = compImg;
            comparation(rockPL, computerRandom);
        },100);
    });

    paper.addEventListener('click',()=>{
        img1.innerHTML= '<img id="paper" src="/img/paper.png" alt="paper">';
        paperPL = 1;

        setTimeout(()=>{
            let computerRandom = Math.floor(Math.random()*3);
            const compImg = randomImage(computerRandom);
            compImg2.innerHTML = compImg;
            comparation(paperPL, computerRandom);
        },100);
    });

    scissor.addEventListener('click',()=>{
        img1.innerHTML= '<img id="scissor" src="/img/scissor.png" alt="scissor">';
        scissorPL = 2;

        setTimeout(()=>{
            let computerRandom = Math.floor(Math.random()*3);
            const compImg = randomImage(computerRandom);
            compImg2.innerHTML = compImg;
            comparation(scissorPL, computerRandom);
        },100);
    });
};

const boton = document.getElementById('boton');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const player1Score = document.querySelector('.scoreL');
const player2Score = document.querySelector('.scoreR');
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const notice = document.querySelector('#noticeh3');

boton.addEventListener('click',()=>{  //start game and hide button
    game();
    boton.style.display = 'none';
    notice.style.display = 'block';
    rock.style.display = 'block';
    paper.style.display = 'block';
    scissor.style.display = 'block';
    contPl1 = 0;
    contPl2 = 0;
    player1Score.textContent = contPl1;
    player2Score.textContent = contPl2;
    text1.textContent = '';
    text2.textContent = '';
    
});
