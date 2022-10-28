window.onload = function () {
  console.log(checkIfMobileScreen());
  addImageHandler();
}

const checkIfMobileScreen = () => {
  return window.innerWidth <= 390
}

const removeSelectedButtons = () => {
  const roundButtons = document.querySelectorAll('.slide-number-identifier');
  roundButtons.forEach(button => button.classList.remove('slide-number-identifier_selected'));
}

const selectClickedButton = (clickedButton) => {
  clickedButton.classList.add('slide-number-identifier_selected')
}

const addClassToSlideNumber = (buttonClass) => {
  document.querySelector(`${buttonClass}`).classList.add('slide-number-identifier_selected');
}

const slideImage = (el) => {
  console.log(el.classList.contains('image_1'))
  const slider = document.querySelector('.slider__images')
  if (['round-1', 'image_1'].some(cl => el.classList.contains(cl))) {
    slider.style.transform = 'translateX(50%)';
    removeSelectedButtons();
    addClassToSlideNumber('.round-1');
  }
  if (['round-2', 'image_2'].some(cl => el.classList.contains(cl))) {
    slider.style.transform = 'translateX(0%)';
    removeSelectedButtons();
    addClassToSlideNumber('.round-2');
  }
  if (['round-3', 'image_3'].some(cl => el.classList.contains(cl))) {
    slider.style.transform = 'translateX(-50%)';
    removeSelectedButtons();
    addClassToSlideNumber('.round-3');
  }
}

const addImageHandler = () => {
  debugger
  document.querySelector('.slider__images').addEventListener('click', (e) => {
    slideImage(e.target)
  })
}