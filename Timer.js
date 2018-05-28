var waitTime = 360000;
var seconds = 0;
var currentSec = 0;
var currentMin = 0;
var currentHour = 0;
var secInterval = 1000;

function WriteTimer(currentHour, currentMin, currentSec){
  // Clears the last line
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Timer - ${currentHour}:${currentMin}:${currentSec}`);
}
var timer = setInterval(function() {
  seconds += secInterval/1000;
  currentSec = seconds % 60;
  currentMin = Math.floor(seconds/60) % 60;
  currentHour = Math.floor(seconds/3600) % 60;
  //call function WriteTimer
  WriteTimer (currentHour, currentMin, currentSec);
}, secInterval);

setTimeout( function () {
  // To clear/stop the timer
  clearInterval(timer);
  console.log("an hour passed...");
}, waitTime);
