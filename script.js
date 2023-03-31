const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const countDownDate = new Date("Mar 31, 2024 12:00:00").getTime();

const myInterval = setInterval(interval, 1000);

function interval() {
  const now = new Date().getTime();
  days.innerText = Math.floor((countDownDate - now) / day);
  hours.innerText = Math.floor(((countDownDate - now) % day) / hour);
  minutes.innerText = Math.floor(((countDownDate - now) % hour) / minute);
  seconds.innerText = Math.floor(((countDownDate - now) % minute) / second);

  if (countDownDate - now < 0) {
    days.innerText = "0";
    hours.innerText = "0";
    minutes.innerText = "0";
    seconds.innerText = "0";
    clearInterval(myInterval);
  }
}