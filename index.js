const overlay = document.querySelector('.overlay');
const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link')

let isHidden = true;

function showNavigation() {
  overlay.classList.remove('hidden');
  navList.classList.remove('top-hide');
  navList.classList.add('top-show');
}

function hideNavigation() {
  navList.classList.remove('top-show');
  navList.classList.add('top-hide');
  overlay.classList.add('hidden');
}

burger.addEventListener('click', () => {
  if (isHidden) {
    showNavigation();
    isHidden = false;
  }
});

overlay.addEventListener('click', () => {
  if (!isHidden) {
    hideNavigation();
    isHidden = true;
  }
});

navLinks.forEach(item => item.addEventListener('click', () => {
  if (!isHidden) {
    hideNavigation();
    isHidden = true;
  }
}));
