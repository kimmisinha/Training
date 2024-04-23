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


//sidebar small screen 
// Sidebar for small screens
const leftSidebarscreen = document.querySelector('.hamburger-sidebar');
const leftToggleButtonscreen = document.querySelector('.fa-solid.fa-bars.hambuger');
const leftCrossButtonscreen = document.querySelector('.fa-solid.fa-xmark.left');

function leftToggleSidebarScreen() {
  leftSidebarscreen.classList.toggle('sidebarrightactive');
}

leftToggleButtonscreen.addEventListener('click', leftToggleSidebarScreen);
leftCrossButtonscreen.addEventListener('click', leftToggleSidebarScreen);
