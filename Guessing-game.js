let secret = Math.floor(Math.random() * 20) + 1;

while (true) {
  var answer = prompt("Please guess the secret number (1-20)");

  // Check if the user clicked "Cancel"
  if (answer === null) {
    alert("Game canceled. The secret number was: " + secret);
    break; // Exit the loop
  }

  var guess = parseInt(answer);

  if (guess === secret) {
    alert("Correct Guess!");
    break;
  } else if (guess < secret) {
    alert("Incorrect, too low");
  } else {
    alert("Incorrect, too high");
  }
}