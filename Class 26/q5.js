//How much pocket money they get
let PocketMoney = prompt("How much pocket money do you get?");

PocketMoney = parseInt(PocketMoney);

if (PocketMoney < 100) {
  document.write("You have enough money to buy chocolates. ");
} else {
  document.write("You can buy toys.");
}
