'use strict';

document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;
  const items = document.querySelectorAll('.poster-item');
  const totalItems = items.length;
  const step = 1; 
  const visibleItems = 3;
  // Calculate the limit for scrolling before reset
  const scrollLimit = totalItems - visibleItems;

  function updateCarousel() {
    // Calculate offset based on current index
    const offset = -(currentIndex * (100 / visibleItems)); // Adjust for correct percentage based on visible items
    document.querySelector('.poster-carousel').style.transform = `translateX(${offset}%)`;
  }

  function autoScroll() {
    // Increment index or reset if at limit
    if (currentIndex < scrollLimit) {
      currentIndex += step;
    } else {
      currentIndex = 0; // Reset index to start for infinite loop
    }
    updateCarousel();
  }

  setInterval(autoScroll, 5000); // Scroll every 5 seconds
});


const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});