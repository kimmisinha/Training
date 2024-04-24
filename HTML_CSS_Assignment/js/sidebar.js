const leftSidebar = document.querySelector('.sidebar');

function leftToggleSidebar() {
  leftSidebar.classList.toggle('active');
}
const leftToggleButton = document.querySelector('.filter-btn');
const leftCrossButton = document.querySelector('.cross');

leftToggleButton.addEventListener('click', leftToggleSidebar);
leftCrossButton.addEventListener('click', leftToggleSidebar);


///
const rightSidebar = document.querySelector('.container-rightsidebar');

function rightToggleSidebar(event) {
  rightSidebar.classList.toggle('right-active');
  //div button 
  //button 
  event.stopPropagation(); // Stop event propagation to prevent closing the sidebar when the cross button is clicked
}

const rightToggleButton = document.querySelector('.cart-button');
const rightCrossButton = document.querySelector('.rightsidebarcross');

rightToggleButton.addEventListener('click', rightToggleSidebar);
rightCrossButton.addEventListener('click', rightToggleSidebar);


///
const menuSidebar = document.querySelector('.menu-item');

function menuToggleSidebar(event) {
  menuSidebar.classList.toggle('active');
  //div button 
  //button 
  event.stopPropagation();
   // Stop event propagation to prevent closing the sidebar when the cross button is clicked
}

const menuToggleButton = document.querySelector('.hambugerbox');
const menuCrossButton = document.querySelector('.left');

menuToggleButton.addEventListener('click', menuToggleSidebar);
menuCrossButton.addEventListener('click', menuToggleSidebar);


