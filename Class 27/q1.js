let marks = prompt("Enter your marks:");
marks = Number(marks);
if (marks < 25) {
  document.write("F");
} else if (marks <= 45) {
  document.write("E");
} else if (marks <= 50) {
  document.write("D");
} else if (marks <= 60) {
  document.write("C");
} else if (marks <= 80) {
  document.write("B");
} else if (marks > 80) {
  document.write("A");
}
