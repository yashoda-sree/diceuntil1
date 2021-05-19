'use strict';
/*const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
score0El.textContent = 0;
score1El.textContent = 0;
*/
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
//const currentScore0El = document.getElementById('current--0');
//const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//start conditions
let currentScore, activeplayer, score, playing;
const init = function () {
  currentScore = 0;
  activeplayer = 0;
  score = [0, 0];
  playing = true;

  document.querySelector('.how').classList.remove('hidden');
  document.querySelector('.player0win').classList.add('hidden');
  document.querySelector('.player1win').classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
};
init();

function switchplayer() {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  //toggle removes if it is already there and adds if it is not present
}

btnroll.addEventListener('click', function () {
  if (playing) {
    //generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    //display dice pic
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //check for 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      switchplayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    score[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];
    if (score[activeplayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player${activeplayer}win`)
        .classList.remove('hidden');
      diceEl.classList.add('hidden');
      document.querySelector('.how').classList.add('hidden');
    } else {
      switchplayer();
    }
  }
});

btnnew.addEventListener('click', init);

//let currentscore0 = 0;
//let currentscore1 = 0;
//let player0active = true;
//let player1active = false;
//let score0el = 0;
//let score1el = 0;
//rolling dice
/*
btnroll.addEventListener('click', function () {
  if (player0active === true) {
    //generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    //display dice pic
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //check for one if true switch to next player;
    if (dice === 1) {
      //switch to next player
      player0active = false;
      player1active = true;
      currentscore0 = 0;
      currentScore0El.textContent = 0;
    } else {
      //add dice to current score
      currentscore0 += dice;
      currentScore0El.textContent = currentscore0;
    }
  } else if (player1active === true) {
    //generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    //display dice pic
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //check for one if true switch to next player;
    if (dice === 1) {
      //switch to next player
      player1active = false;
      player0active = true;
      currentscore1 = 0;
      currentScore1El.textContent = 0;
    } else {
      //add dice to current score
      currentscore1 += dice;
      currentScore1El.textContent = currentscore1;
    }
  }
});
*/
//add current score to element and then make it 0
/*if (player0active === true) {
    if (score0el === 100) {
    } else {
      score0el += currentscore0;
      currentscore0 = 0;
      currentScore0El.textContent = 0;
      score0El.textContent = score0el;
      //switch to next player
      player0active = false;
      player1active = true;
    }
  } else {
    score1el += currentscore1;
    currentscore1 = 0;
    currentScore1El.textContent = 0;
    score1El.textContent = score1el;
    //switch to next player
    player1active = false;
    player0active = true;
  }*/
