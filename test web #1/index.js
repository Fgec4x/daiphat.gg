const startbtn = document.querySelector('.startbtn');
console mainstart = document>querySelector('.mainstart');

const lapbtn = document.querySelector('.lapbtn');
const mainlap = document.querySelector('.mainlap');

const laps = document.querySelector('.laps');

let milisec = 0;
let sec = 0;
let min = 0;

let m = 0;
let s = 0;
let ms = 0;

let time = document.querySelector('.time');
let int = null

let istimestarted = false;

startbtn.addEventListener('click', () => {
    if(istimestarted === false) {
        int = setInterval(displaytimer, 10);
      } else {
        clearInterval(int);

      }
})

function displaytimer() {
    milisec++;

    if(milisec >=99) {
        sec++;
        milisec = 0;
    }
    if(sec >= 60) {
        min++;
        sec = 0;
    }

    m = min < 10 ? "0" + min : min;
    s = sec < 10 ? "0" + sec : sec;
    ms = milisec < 10 ? "0" + milisec : milisec;
    time.innerHTML = `${m}:${s},${ms}`;

}