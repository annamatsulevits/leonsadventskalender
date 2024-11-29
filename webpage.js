let currentBox = null;
const correctAnswers = {
  1: "answer1",  // Replace with correct answers for each box
  2: "answer2"
  // Add more answers
};

document.querySelectorAll('.clickable-box').forEach(box => {
  box.addEventListener('click', function() {
    currentBox = this.getAttribute('data-day');
    openPopup();
  });
});

function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('answer').value = '';  // Clear the input
  document.getElementById('downloadBtn').style.display = 'none';  // Hide the download button
}

function checkAnswer() {
  const answer = document.getElementById('answer').value.trim().toLowerCase();
  if (answer === correctAnswers[currentBox].toLowerCase()) {
    document.getElementById('downloadBtn').style.display = 'inline-block';
  } else {
    alert("Incorrect answer. Try again!");
  }
}

function downloadImage() {
  const a = document.createElement('a');
  a.href = 'your-image.png';  // Path to the image you want to download
  a.download = 'reward.png';
  a.click();
}
