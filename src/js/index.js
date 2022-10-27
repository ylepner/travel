window.onload = function () {
  addButtonRoundHandler();
  addImageHandler();
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

const slideImage = (el) => {
  console.log(el.classList.contains('image_1'))
  const slider = document.querySelector('.slider__images')
  if (['round-1', 'image_1'].some(cl => el.classList.contains(cl))) {
    slider.style.transform = 'translateX(50%)';
  }
  if (['round-2', 'image_2'].some(cl => el.classList.contains(cl))) {
    slider.style.transform = 'translateX(0%)';
  }
  if (['round-3', 'image_3'].some(cl => el.classList.contains(cl))) {
    slider.style.transform = 'translateX(-50%)';
  }
}

const addImageHandler = () => {
  document.querySelector('.slider__images').addEventListener('click', (e) => {
    slideImage(e.target)
  })
}