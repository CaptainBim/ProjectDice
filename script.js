//variable//
const dadu = document.querySelector(".dice");
const player0 = document.querySelector("#section-0");
const player1 = document.querySelector("#section-1");
const game_baru = document.getElementById("btn-baru");
const dadu_putar = document.getElementById("btn-putar");
const dadu_tahan = document.getElementById("btn-tahan");
const giliranMain = document.querySelector(".giliran-main");
let scores = [0, 0];
let scoreCurrent = 0;
let playerActive = 0;

//ubah pemain//
function giliranMains() {
  giliranMain.value = 'Giliran: Pemain ' + (playerActive + 1);
}

//data pemain//
function togglePlayer() {
  if (playerActive === 0) {
    playerActive = 1;
  } else {
    playerActive = 0;
  }
  scoreCurrent = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  player0.classList.toggle('player-active');
  player1.classList.toggle('player-active');
  giliranMains();
}

//roll dadu//
dadu_putar.addEventListener('click', function() {
  const dice = Math.floor(Math.random() * 6) + 1;
  dadu.style.display = 'block';
  dadu.src = './images/dadu-' + dice + '.png';

  if (dice !== 1) {
    scoreCurrent += dice;
    document.getElementById('current-' + playerActive).textContent = scoreCurrent;
  } else {
    togglePlayer();
  }
});

//dadu ditahan//
dadu_tahan.addEventListener('click', function() {
  scores[playerActive] += scoreCurrent;
  document.getElementById('score-' + playerActive).textContent = scores[playerActive];

  if (scores[playerActive] >= 100) {
    document.getElementById('name-' + playerActive).textContent = 'Pemenang!';
    dadu.style.display = 'none';
  } else {
    togglePlayer();
  }
});

//reset//
game_baru.addEventListener('click', function() {
  scores = [0, 0];
  scoreCurrent = 0;
  playerActive = 0;
  dadu.style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  giliranMains();
});
