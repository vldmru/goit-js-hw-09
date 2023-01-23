const refs = {
   changeColorBtn: document.querySelector('[data-start]'),
   stopChangeColorBtn: document.querySelector('[data-stop]'),
   bodyEl: document.querySelector('body'),
}

refs.changeColorBtn.addEventListener('click', onChangeColorBtnClick);
refs.stopChangeColorBtn.addEventListener('click', onStopChangeColorBtnClick);

let intervalId;

function onChangeColorBtnClick() {
  refs.changeColorBtn.setAttribute('disabled', true);
  intervalId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopChangeColorBtnClick() {
  refs.changeColorBtn.removeAttribute('disabled');
  clearTimeout(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
