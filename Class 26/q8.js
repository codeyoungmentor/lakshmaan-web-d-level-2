//Their height in cms
let height = prompt("What is your height in cms?");

height = parseInt(height);

if (height < 140) {
  document.write("Play football. ");
} else {
  document.write("Play basketball. ");
}
