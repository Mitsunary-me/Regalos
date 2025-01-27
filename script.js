let currentAmount = 0;
const goalAmount = 100; // Meta de regalos (puedes cambiarla)

function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const percentage = (currentAmount / goalAmount) * 100;

  progressBar.style.width = `${percentage}%`;
  progressText.innerText = `${percentage.toFixed(0)}%`;
}

function addAmount(amount) {
  if (currentAmount + amount <= goalAmount) {
    currentAmount += amount;
    updateProgressBar();
  } else {
    alert("¡Has alcanzado la meta!");
  }
}
