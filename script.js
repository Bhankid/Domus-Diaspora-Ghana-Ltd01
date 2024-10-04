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

// main slider

const slider = document.querySelector(".slider");

let autoplayTimeout;
let autoplayRunning = false;

function activate(e) {
  const items = document.querySelectorAll(".item");
  const slider = document.querySelector(".slider");

  if (e.target.matches(".next")) {
    const currentItem = slider.querySelector(".item:first-child");
    slider.append(currentItem);
  } else if (e.target.matches(".prev")) {
    const currentItem = slider.querySelector(".item:last-child");
    slider.prepend(currentItem);
  }
}

function autoplay() {
  if (autoplayRunning) return;
  autoplayRunning = true;

  const items = document.querySelectorAll(".item");
  const slider = document.querySelector(".slider");

  const currentItem = slider.querySelector(".item:first-child");
  slider.append(currentItem);

  autoplayTimeout = setTimeout(() => {
    autoplayRunning = false;
    autoplay();
  }, 5000);
}

autoplay();

// clear interval on hover
// document.querySelector(".slider").addEventListener("mouseover", () => {
//   clearTimeout(autoplayTimeout);
//   autoplayRunning = false;
// });

// restart interval on mouseleave
// document.querySelector(".slider").addEventListener("mouseleave", (e) => {
//   if (!e.relatedTarget || !document.querySelector(".slider").contains(e.relatedTarget)) {
//     autoplay();
//   }
// });
document.addEventListener("click", activate, false);

// // Card swiper
// const stack = document.querySelector(".stack");
// const cards = Array.from(stack.children)
//   .reverse()
//   .filter((child) => child.classList.contains("card"));

// cards.forEach((card) => stack.appendChild(card));

// function moveCard() {
//   const lastCard = stack.lastElementChild;
//   if (lastCard.classList.contains("card")) {
//     lastCard.classList.add("swap");

//     setTimeout(() => {
//       lastCard.classList.remove("swap");
//       stack.insertBefore(lastCard, stack.firstElementChild);
//     }, 1200);
//   }
// }

// let autoplayInterval = setInterval(moveCard, 4000);

// stack.addEventListener("click", function (e) {
//   const card = e.target.closest(".card");
//   if (card && card === stack.lastElementChild) {
//     card.classList.add("swap");

//     setTimeout(() => {
//       card.classList.remove("swap");
//       stack.insertBefore(card, stack.firstElementChild);
//     }, 1200);
//   }
// });

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

// Select all hero cards
// const heroCards = document.querySelectorAll(".hero-card");

// // Create a single timeline for all animations
// const timeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".hero-cards-wrapper",
//     start: "top 80%",
//     end: "bottom 20%",
//     toggleActions: "play none none reset",
//   },
// });

// // Animate each hero card
// heroCards.forEach((card, index) => {
//   const imageContainer = card.querySelector(".image-container");
//   const textContainer = card.querySelector(".text-container");

//   // Add animations for each hero card to the timeline
//   timeline.from(
//     imageContainer,
//     {
//       duration: 0.3, 
//       x: -200,
//       opacity: 0,
//       ease: "power2.inOut",
//       scale: 0.25,
//     },
//     `+=${index * 0.2}` 
//   );
//   timeline.from(
//     textContainer,
//     {
//       duration: 0.3,
//       x: 200,
//       opacity: 0,
//       ease: "power2.inOut",
//       delay: 0.1, 
//       scale: 0.5,
//     },
//     `+=${index * 0.2}` 
//   );
//   timeline.to(
//     imageContainer,
//     {
//       duration: 0.15, 
//       rotation: 360,
//       ease: "power2.inOut",
//       delay: 0.3, 
//     },
//     `+=${index * 0.2}` 
//   );
//   timeline.to(
//     textContainer,
//     {
//       duration: 0.15, 
//       rotation: -360,
//       ease: "power2.inOut",
//       delay: 0.3, 
//     },
//     `+=${index * 0.2}` 
//   );
// });
