//Variáveis
const screenOne = document.querySelector('.screen-one');
const screenTwo = document.querySelector('.screen-two');
const btnTry = document.querySelector('#btnTry');
const btnPlayAgain = document.querySelector('#btnPlayAgain');
const randomNumber = Math.round(Math.random() * 10);
const pressEnter = document;
let xAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick);
btnPlayAgain.addEventListener('click', handlePlayAgain);
pressEnter.addEventListener('keydown', handlePressEnter);

//funções
function handleTryClick(e) {
  e.preventDefault(); //Previnir o padrão

  const inputNumber = document.querySelector('#inputNumber');

  if (inputNumber.value == '') {
    xAttempts;
  } else {
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen();
      screenTwo.querySelector(
        'h2'
      ).innerText = `Acertou em ${xAttempts} tentativas`;
    }
    inputNumber.value = '';
    xAttempts++;
  }
}

function handlePlayAgain() {
  toggleScreen();
  document.location.reload(true);
  xAttempts = 1;
}

function toggleScreen() {
  screenOne.classList.toggle('hide');
  screenTwo.classList.toggle('hide');
}

function handlePressEnter(e) {
  if (e.key == 'Enter' && screenOne.classList.contains('hide')) {
    console.log(e);
    handlePlayAgain();
  }
}
