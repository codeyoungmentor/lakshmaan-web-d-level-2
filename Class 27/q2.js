let pH = prompt("Enter the pH level:");
pH = Number(pH);
if (pH <= 3) {
  document.write("strong acid");
} else if (pH <= 6) {
  document.write("weak acid");
} else if (pH == 7) {
  document.write("neutral");
} else if (pH <= 11) {
  document.write("weak base");
} else if (pH <= 14) {
  document.write("strong base");
} else {
  document.write("not valid pH level");
}
