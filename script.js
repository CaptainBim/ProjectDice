//variable//
const dadu = document.querySelector(".dice");// ini gambar dadu
const player0 = document.querySelector("#section-0");//ini player 1
const player1 = document.querySelector("#section-1");//ini player 2
const game_baru = document.getElementById("btn-baru");//ini button restart game
const dadu_putar = document.getElementById("btn-putar");//ini button buat mutar dadu
const dadu_tahan = document.getElementById("btn-tahan");//ini button buat dadunya ditahan kemudian ditukar player lain
const giliranMain = document.querySelector(".giliran-main");//giliran siapa yang main
let scores = [0, 0]; //ini score
let nilaiSementara = 0;//agar ketika ganti player nanti nilainya jadi 0
let playerAktif = 0;//player active selalu player 1

//ubah pemain//
function gantiPlayer() {
  giliranMain.value = 'Giliran: Pemain ' + (playerAktif + 1); //ganti player panggil giliran main (buat warna activenya) ini array :) player 0 = 1
}

//data pemain//
function Player() { // ini data player
  if (playerAktif == 0) {// ini dibolak balik. jika player aktifnya 0 maka 1 jalan kemudian sebaliknya
    playerAktif = 1;
  } else {
    playerAktif = 0;
  }
  nilaiSementara = 0; //ketika pergantian player nilai sementara menjadi 0
  document.getElementById('current-0').textContent = '0';//ketika pergantian player nilai menjadi 0
  document.getElementById('current-1').textContent = '0';//ketika pergantian player nilai menjadi 0
  player0.classList.toggle('player-active');//ketika pergantian player nilai  menjadi 0
  player1.classList.toggle('player-active');//ketika pergantian player nilai  menjadi 0
  gantiPlayer();//ganti player
}

//roll dadu//
dadu_putar.addEventListener('click', function() {
  const dice = Math.floor(Math.random() * 6) + 1;//mengambil angka random pembatas sampai ke 6 kemudian +1 buat agar bilangan jadi bulat 6.++ sekian
  dadu.src = './images/dadu-' + dice + '.png';//ubah random nomor ke gambar
  if (dice != 1) {//ketika bilangan tidak sama dengan 1 maka lanjut terus sampai....
    nilaiSementara += dice;//nilai sementara ditambah nilai dadu random
    document.getElementById('current-' + playerAktif).textContent = nilaiSementara;//masukkan nilai sementara (dadu) ke nilai asli
  } else {//disini. tuker player
    Player();
  }
});

//dadu ditahan//
dadu_tahan.addEventListener('click', function() {
  scores[playerAktif] += nilaiSementara;//nilai asli ditambah dengan nilai sementara (dadu)
  document.getElementById('score-' + playerAktif).textContent = scores[playerAktif]; //mengubah nilai score
  if (scores[playerAktif] >= 100) {//jika nilai asli 100 maka
    document.getElementById('name-' + playerAktif).textContent = 'Win!';//ubah tulisan playernya jadi win kemudian...
    dadu_putar.disabled = true; //button ditahan
    dadu_tahan.disabled = true; //tidak bisa ditekan
  } else {
    Player();//tuker player
  }
});

//reset//
game_baru.addEventListener('click', function() {
  location.reload();//reload website dah diganti lebih simple gampang
});