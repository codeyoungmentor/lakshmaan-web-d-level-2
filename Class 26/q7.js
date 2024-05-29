//When they wake up
let wakeUpTime = prompt("When do you wake up (in hours)?");

wakeUpTime = parseInt(wakeUpTime);

if (wakeUpTime < 5) {
  document.write("You wake up early. ");
} else {
  document.write("You wake up late. ");
}
