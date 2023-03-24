const hourEl = document.querySelector('#hour');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const ampmEl = document.querySelector('#ampm');

function updateClock() {
   let hour = new Date().getHours();
   let minutes = new Date().getMinutes();
   let seconds = new Date().getSeconds();
   let ampm = 'AM';

   if (hour > 12) {
      hour = hour - 12;
      ampm = 'PM';
   }

   hour = hour < 10 ? '0' + hour : hour;
   minutes = minutes < 10 ? '0' + minutes : minutes;
   seconds = seconds < 10 ? '0' + seconds : seconds;

   hourEl.innerText = hour;
   minutesEl.innerText = minutes;
   secondsEl.innerText = seconds;
   ampmEl.innerText = ampm;
}

function init() {
   return setInterval(updateClock, 1000);
}

init();
