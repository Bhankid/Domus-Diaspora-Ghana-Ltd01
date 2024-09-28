// const btnEl = document.querySelector(".btn");

// btnEl.addEventListener("mouseover", (event) => {
//   const x = event.offsetX;
//   const y = event.offsetY;

//   btnEl.style.setProperty("--xPos", x + "px");
//   btnEl.style.setProperty("--yPos", y + "px");
// });


// Mobile Nav
document.getElementById("open-nav").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".nav-toggle").classList.toggle("active");
});

document
  .getElementById("close-nav")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".nav-toggle").classList.toggle("active");
  });

document.addEventListener("click", function (event) {
  if (!event.target.closest(".nav-toggle, .nav-links")) {
    document.querySelector(".nav-toggle").classList.remove("active");
  }
});

// Get the elements
const navToggle = document.getElementById('open-nav');
const navMenu = document.getElementById('nav-links');
const navDropdowns = document.querySelectorAll('.dropdown');

// Add event listener to the nav toggle
navToggle.addEventListener('click', () => {
  // Toggle the nav menu
  navMenu.classList.toggle('open');
});

// Add event listener to the dropdown toggles
navDropdowns.forEach((dropdown) => {
  const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
  const dropdownMenu = dropdown.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', () => {
    // Toggle the dropdown menu
    dropdownMenu.classList.toggle('open');

    // Add a nice transition effect
    dropdownMenu.style.transition = 'max-height 0.5s ease-in-out';
    if (dropdownMenu.classList.contains('open')) {
      dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';
    } else {
      dropdownMenu.style.maxHeight = '0px';
    }
  });
});

// Card swiper
const stack = document.querySelector(".stack");
const cards = Array.from(stack.children)
  .reverse()
  .filter((child) => child.classList.contains("card"));

cards.forEach((card) => stack.appendChild(card));

function moveCard() {
  const lastCard = stack.lastElementChild;
  if (lastCard.classList.contains("card")) {
    lastCard.classList.add("swap");

    setTimeout(() => {
      lastCard.classList.remove("swap");
      stack.insertBefore(lastCard, stack.firstElementChild);
    }, 1200);
  }
}

let autoplayInterval = setInterval(moveCard, 4000);

stack.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (card && card === stack.lastElementChild) {
    card.classList.add("swap");

    setTimeout(() => {
      card.classList.remove("swap");
      stack.insertBefore(card, stack.firstElementChild);
    }, 1200);
  }
});


// Swiper
const swiper = new Swiper(".swiper", {
  grabCursor: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});



const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;



