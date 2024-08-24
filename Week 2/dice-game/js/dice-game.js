function rollDice() {
  let goldCoins = 0;
  for (let i = 0; i < 10; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    alert("You rolled a " + roll);
    if (roll === 1) {
      alert("Game over no more rolls!");
      break;
    } else if (roll < 5) {
      continue;
    }
    if (roll === 5) {
      alert("Congratulations, you win 5 gold coins!");
      goldCoins += 5;
    } else if (roll === 6) {
      alert("Congratulations, you win 6 gold coins!");
      goldCoins += 6;
    }
  }
  alert("You finished with " + goldCoins + " gold coins.");
}
