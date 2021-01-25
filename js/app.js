/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const navBarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('[data-nav]');
for (let i = 0; i < sections.length; i++){
  // console.log(sections[i].dataset.nav);
  const newListItem = document.createElement('li');
  newListItem.textContent = sections[i].dataset.nav;
  navBarList.appendChild(newListItem);
};


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
