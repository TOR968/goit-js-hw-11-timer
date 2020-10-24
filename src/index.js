const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');
let timerId = null;


buttonStart.addEventListener('click', () => { timerId = setInterval(changeBobyColor, 2000) });

buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
  buttonStart.disabled = false;
});



function changeBobyColor() {
      document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    buttonStart.disabled = true;
}
