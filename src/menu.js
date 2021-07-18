const menuBtn = document.querySelector('.menu');
const menuList = document.querySelector('.navigation__list');
const backdrop = document.querySelector('.backdrop');
const BODY = document.body;



const toggleMobileMenu = (event) => {
  event.preventDefault();
  menuList.classList.toggle('active');
  backdrop.classList.toggle('active');
  BODY.classList.toggle('active');
}

const toggleMobileMenuItemsHandler = (event) => {
  const { target: { classList } } = event;
  if(classList.contains('navigation__link')) {
    toggleMobileMenu(event);
  }
}

backdrop.addEventListener('click', toggleMobileMenu);

menuList.addEventListener('click', toggleMobileMenuItemsHandler);
menuBtn.addEventListener('click', toggleMobileMenu)