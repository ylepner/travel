let centerImageNumber = 1;
let countries = ['SPAIN', 'JAPAN', 'USA']
const slider = document.querySelector('.slider__images')


window.onload = function () {
  if (checkIfMobileScreen()) {
    addImageHandlerMobile();
  } else {
    addImageHandlerDesktop();
  }
}

const checkIfMobileScreen = () => {
  return window.innerWidth <= 390
}

const addImageHandlerDesktop = () => {
  document.querySelector('.left-direction').addEventListener('click', (e) => {
    slide(-1)
  })
  document.querySelector('.right-direction').addEventListener('click', (e) => {
    slide(1)
  })
}

const addImageHandlerMobile = () => {
  document.querySelector('.slider__switcher').addEventListener('click', (e) => {
    if (e.target.classList.contains('switch__button_left')) {
      slideImageMobile('left')
    }
    if (e.target.classList.contains('switch__button_right')) {
      slideImageMobile('right')
    }
  })
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

const slide = (direction) => {
  centerImageNumber = mod((centerImageNumber + (direction)), 3) // 2
  slider.classList.add('animating')
  slider.style.transform = `translateX(${50 * (direction)}%)`;
  if (direction < 0) {
    slider.style.transform = 'translateX(50%)';
  } else {
    slider.style.transform = 'translateX(-50%)'
  }
  setTimeout(() => {
    slider.classList.remove('animating')
    slider.style.transform = 'translate(0%)'
    replaceCards(direction)
  }, 2000)

}

const replaceCards = (direction) => {
  centerImageNumber
  const newSlideNumber = mod((centerImageNumber + direction * 2), 3)
  const newSlideDiv = document.createElement('div')
  newSlideDiv.classList.add('slider__image')
  const img = document.createElement('img')
  img.src = `/assets/img/dest-${newSlideNumber}.jpg`
  img.className = `image image_${newSlideNumber}`
  newSlideDiv.appendChild(img)
  const text = document.createElement('div')
  text.className = 'image__text'
  text.innerHTML = `${countries[newSlideNumber]}`
  newSlideDiv.appendChild(text)
  const images = document.querySelectorAll('.slider__image')
  if (direction < 0) {
    slider.prepend(newSlideDiv)
    slider.removeChild(images[images.length - 1])
  } else {
    slider.appendChild(newSlideDiv)
    slider.removeChild(images[0])
  }

}

const mod = (m, n) => {
  return (m + n) % n
}