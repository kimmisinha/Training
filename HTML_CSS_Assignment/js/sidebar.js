const sidebar = document.querySelector('.sidebar');

// Function to toggle the active class
function toggleSidebar() {
  sidebar.classList.toggle('active');
}

// Example event listener, like a button click, to trigger the toggle
const toggleButton = document.querySelector('.filter-btn');
const crossButton = document.querySelector('.cross');

toggleButton.addEventListener('click', toggleSidebar);
crossButton.addEventListener('click', toggleSidebar);