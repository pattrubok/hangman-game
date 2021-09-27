const randomChoice = (arr) => {
  const b = arr[Math.floor(Math.random() * arr.length)];
  return b;
};

const checkWin = (correct, wrong, word) => {
  let status = "win";

  // Check for win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // Check for lose
  if (wrong.length === 6) status = "lose";

  return status;
};

export { checkWin, randomChoice };
