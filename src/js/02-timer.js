import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  dateField: document.querySelector('#datetime-picker'),
  startTimeBtn: document.querySelector('[data-start]'),
  daysField: document.querySelector('[data-days]'),
  hoursField: document.querySelector('[data-hours]'),
  minutesField: document.querySelector('[data-minutes]'),
  secondsField: document.querySelector('[data-seconds]'),
};

refs.startTimeBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notify.failure('Please choose a date in the future');
    } else {
      refs.startTimeBtn.removeAttribute('disabled');
    }
  },
};

const fp = flatpickr('#datetime-picker', options);

refs.startTimeBtn.addEventListener('click', onStartTimeBtnClick);

function onStartTimeBtnClick() {
  refs.dateField.setAttribute('disabled', true);
  refs.startTimeBtn.setAttribute('disabled', true);
  const dateSelected = fp.selectedDates[0];

  const intervalId = setInterval(() => {
    const nowDate = new Date();
    const timer = dateSelected - nowDate;
    const result = convertMs(timer);
    refs.daysField.innerHTML = addLeadingZero(result.days);
    refs.hoursField.innerHTML = addLeadingZero(result.hours);
    refs.minutesField.innerHTML = addLeadingZero(result.minutes);
    refs.secondsField.innerHTML = addLeadingZero(result.seconds);

    if (timer < 1000) {
      clearTimeout(intervalId);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}