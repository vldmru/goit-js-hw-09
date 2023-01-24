import { Notify } from 'notiflix/build/notiflix-notify-aio';

const promiseForm = document.querySelector('.form');

promiseForm.addEventListener('submit', onPromiseFormSubmit);

function onPromiseFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.target;
  let firstDelayValue = Number(delay.value);
  const stepDelayValue = Number(step.value);
  const amountOfDelay = Number(amount.value);

  for (let i = 1; i <= amountOfDelay; i += 1) {
    createPromise(i, firstDelayValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          useIcon: false,
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          useIcon: false,
        });
      });
    firstDelayValue += stepDelayValue;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}