const dropDownLinks = document.getElementById("drop-down-links");
const servicesLink = document.getElementById("services-link");
const overlayPopup = document.getElementById("homepage-hero-overlay");
const contactOwerlay = document.getElementById("contact-overlay");
const closeOverlay = document.getElementById("overlay-close-btn");
const navBarPositions = document.getElementById("hero-navbar");
const scrollOff = document.body;
const locationNavbarBoxes = document.querySelectorAll(".location-navbar-box");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const navbar = document.querySelector(".nav-links-box");

const packageForm = document.querySelector(".popup-input-container");

for (let i = 0; i < locationNavbarBoxes.length; i++) {
  locationNavbarBoxes[i].addEventListener("click", () => {
    for (let j = 0; j < locationNavbarBoxes.length; j++) {
      locationNavbarBoxes[j].style.backgroundColor = "#f8f8f8";
    }
    locationNavbarBoxes[i].style.backgroundColor = "#fff";
  });
}

let isModalOpen = false;

servicesLink.addEventListener("click", () => {
  if (!isModalOpen) {
    dropDownLinks.style.display = "block";
    isModalOpen = !isModalOpen;
  } else {
    dropDownLinks.style.display = "none";
    isModalOpen = !isModalOpen;
  }
});
function increment() {
  navBarPositions.style.position = "sticky";
  scrollOff.style.overflowY = "hidden";
  overlayPopup.style.display = "block";
}
closeOverlay.addEventListener("click", () => {
  scrollOff.style.overflowY = "scroll";
  overlayPopup.style.display = "none";
  navBarPositions.style.position = "static";
});

let isNavbarOpen = false;

hamburgerIcon.addEventListener("click", () => {
  if (!isNavbarOpen) {
    navbar.style.display = "flex";
    isNavbarOpen = !isNavbarOpen;
  } else {
    navbar.style.display = "none";
    isNavbarOpen = !isNavbarOpen;
  }
});

// const dateSelection = document.querySelector(".inputs-box-date");
// dateSelection.addEventListener("change", (e) => {
//   console.log(e.target.value);
// })

// const newArray = [
//   {
//     id: 1,
//     country: "Germany",
//     city: "Berlin",
//     date: "10-09-2024",
//     preferences: ["Business", "Cruise", "Traditions"]
//   },
//   {
//     id: 2,
//     country: "Syria",
//     city: "Homs",
//     date: "05-02-2024",
//     preferences: ["Hiking", "Romantic"]
//   },
// ];


// packageForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const inputElements = ["box-input-text", ]

//   let formData = new FormData(this);
//   console.log(formData)
//   console.log(event)
// })

// console.log(newArray);
