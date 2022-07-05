const progressElements = document.querySelectorAll('.progress-element');
const duration = 800;

function updateProgressBar() {
  progressElements.forEach((progress) => {
    const percentLabel = progress.previousElementSibling.lastElementChild;
    const dataProgress = +progress.getAttribute('data-progress');

    let percent = parseInt(percentLabel.textContent);
    let number = dataProgress / duration;

    let timer = setInterval(() => {
      const sum = Math.floor((percent += number));

      percentLabel.textContent = sum + '%';
      progress.value = sum;

      if (progress.value >= dataProgress) {
        clearInterval(timer);
        percentLabel.textContent = progress.value + '%';
      }
    });
  });
}

setTimeout(updateProgressBar, 2000);
