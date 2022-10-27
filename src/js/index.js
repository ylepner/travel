window.onload = function () {
  addButtonRoundHandler();
}

const addButtonRoundHandler = () => {
  document.querySelector('.slider__buttons-round').addEventListener('click', (e) => {
    if (e.target.classList.contains('button_round')) {
      removeSelectedButtons();
      selectClickedButton(e.target);
      slideImage(e.target);
    }
  })
}

const removeSelectedButtons = () => {
  const roundButtons = document.querySelectorAll('.button_round');
  roundButtons.forEach(button => button.classList.remove('button_round_selected'));
}

const selectClickedButton = (clickedButton) => {
  clickedButton.classList.add('button_round_selected')
}

const slideImage = (button) => {
  const slider = document.querySelector('.slider__images')
  if (button.classList.contains('round-1')) {
    slider.style.transform = 'translateX(50%)';
  }
  if (button.classList.contains('round-2')) {
    slider.style.transform = 'translateX(0%)';
  }
  if (button.classList.contains('round-3')) {
    slider.style.transform = 'translateX(-50%)';
  }
}
