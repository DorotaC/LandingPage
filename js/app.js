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
/*I used information from these Shubham P (mentor) posts on Knowledge:
https://knowledge.udacity.com/questions/85408#96950
https://knowledge.udacity.com/questions/66312#66326

/**
 * Define Global Variables
*/
const navBarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('[data-nav]');

//function that creates NavBar
function createNavBar() {
  for (let i = 0; i < sections.length; i++) {
    const newListItem = document.createElement('li');
    const newAnchorItem = document.createElement('a');
    newAnchorItem.textContent = sections[i].dataset.nav;
    newAnchorItem.href = '#section' + (i+1);
    newAnchorItem.classList.add('section' + (i+1));
    newListItem.appendChild(newAnchorItem);
    navBarList.appendChild(newListItem);
  };
};

//scrolling to section clicked on NavBar
function scrollToSections(event) {
  event.target.scrollIntoView();
};

//changing class status to active when section is visible
function activeSection() {
  for (let i = 0; i < sections.length; i++) {
    const visibleSection = sections[i].getBoundingClientRect();
    if (visibleSection.top <= 150 && visibleSection.bottom >= 150){
      sections[i].classList.add('your-active-class');
    } else {
      sections[i].classList.remove('your-active-class');
    };
  };
};

// Build menu
document.addEventListener('DOMContentLoaded', createNavBar);
// Scroll to section on link click
navBarList.addEventListener('click', scrollToSections);
// Set sections as active
document.addEventListener('scroll', activeSection);
