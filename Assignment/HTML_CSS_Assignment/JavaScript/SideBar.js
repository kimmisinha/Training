// <!-- navbar-right -->

navOptionContainer = document.querySelector('.nav-option-container');
let navoptiondropdown = document.querySelector('.dropdown');
let navoptioncartbutton = document.querySelector('.cart-button');
navOptionContainer.innerHTML = ""
//box
let navOption = document.createElement('div');
navOption.classList.add('box');
navOption.textContent = "";
navOptionContainer.appendChild(navOption);

//HOME
navOption = document.createElement('div');
navOption.classList.add('nav-option');
navOption.textContent = 'HOME';
navOptionContainer.appendChild(navOption);


//ALL PRODUCTS
navOption = document.createElement('div');
navOption.classList.add('nav-option');
navOption.textContent = 'ALL PRODUCTS';
navOptionContainer.appendChild(navOption);



//T-SHIRTS
navOption = document.createElement('div');
navOption.classList.add('nav-option');
navOption.textContent = 'T-SHIRTS';
navOptionContainer.appendChild(navOption);



//MUGS
navOption = document.createElement('div');
navOption.classList.add('nav-option');
navOption.textContent = 'MUGS';
navOptionContainer.appendChild(navOption);

//ABOUT HDX
navOption = document.createElement('div');
navOption.classList.add('nav-option');
navOption.textContent = 'ABOUT HDX';
navOptionContainer.appendChild(navOption);



//CONTACT

navOption = document.createElement('div');
navOption.classList.add('nav-option');
navOption.textContent = 'CONTACT';
navOptionContainer.appendChild(navOption);


//after all append 
navOptionContainer.append(navoptiondropdown, navoptioncartbutton)
//sidebar

const leftSidebar = document.querySelector(".sidebar");

function leftToggleSidebar() {
  leftSidebar.classList.toggle("active");
}
const leftToggleButton = document.querySelector(".filter-btn");
const leftCrossButton = document.querySelector(".cross");

leftToggleButton.addEventListener("click", leftToggleSidebar);
leftCrossButton.addEventListener("click", leftToggleSidebar);

///
const rightSidebar = document.querySelector(".container-rightsidebar");

function rightToggleSidebar(event) {
  rightSidebar.classList.toggle("right-active");
  //div button
  //button
  event.stopPropagation(); // Stop event propagation to prevent closing the sidebar when the cross button is clicked
}

const rightToggleButton = document.querySelector(".cart-button");
const rightCrossButton = document.querySelector(".rightsidebarcross");

rightToggleButton.addEventListener("click", rightToggleSidebar);
rightCrossButton.addEventListener("click", rightToggleSidebar);

///
const menuSidebar = document.querySelector(".menu-item");

function menuToggleSidebar(event) {
  menuSidebar.classList.toggle("active");
  //div button
  //button
  event.stopPropagation();
  // Stop event propagation to prevent closing the sidebar when the cross button is clicked
}

const menuToggleButton = document.querySelector(".hambugerbox");
const menuCrossButton = document.querySelector(".left");

menuToggleButton.addEventListener("click", menuToggleSidebar);
menuCrossButton.addEventListener("click", menuToggleSidebar);



// <!-- <div class="box">
// </div> -->
// <!-- <div class="nav-option">HOME</div>
// <div class="nav-option">ALL PRODUCTS</div>
// <div class="nav-option">T-SHIRTS</div>
// <div class="nav-option">MUGS</div>
// <div class="nav-option">ABOUT HDX</div>
// <div class="nav-option">CONTACT</div> -->
