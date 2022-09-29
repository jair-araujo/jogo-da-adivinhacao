const screenOne = document.querySelector('.screen-one');
const screenTwo = document.querySelector('.screen-two');
const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//função Callback
function handleTryClick(e) {
  e.preventDefault(); //Previnir o padrão

  const inputNumber = document.querySelector('#inputNumber');

  if (Number(inputNumber.value) == randomNumber) {
    screenOne.classList.add('hide');
    screenTwo.classList.remove('hide');

    screenTwo.querySelector(
      'h2'
    ).innerText = `Acertou em ${xAttempts} tentativas`;
  }
  inputNumber.value = '';
  xAttempts++;
}

function handlePlayAgain() {
  screenOne.classList.remove('hide');
  screenTwo.classList.add('hide');
  document.location.reload(true);
  xAttempts = 1;
}

//Eventos
const btnTry = document.querySelector('#btnTry');
const btnPlayAgain = document.querySelector('#btnPlayAgain');

btnTry.addEventListener('click', handleTryClick);
btnPlayAgain.addEventListener('click', handlePlayAgain);
