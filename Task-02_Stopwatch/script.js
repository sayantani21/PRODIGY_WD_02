let timer;
let seconds = 0, minutes = 0, hours = 0;
function updateDisplay() {
  document.getElementById('display').textContent = 
    (hours<10?"0":"")+hours+":"+(minutes<10?"0":"")+minutes+":"+(seconds<10?"0":"")+seconds;
}
function start() {
  if (!timer) {
    timer = setInterval(()=>{
      seconds++;
      if (seconds==60){seconds=0; minutes++;}
      if (minutes==60){minutes=0; hours++;}
      updateDisplay();
    },1000);
  }
}
function stop() {clearInterval(timer); timer=null;}
function reset() {stop(); seconds=0; minutes=0; hours=0; updateDisplay();}
updateDisplay();