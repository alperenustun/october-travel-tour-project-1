const dropDownLinks = document.getElementById("drop-down-links");
const servicesLink = document.getElementById("services-link");
const overlayPopup = document.getElementById("homepage-hero-overlay");
const contactOwerlay = document.getElementById("contact-overlay");
const closeOverlay = document.getElementById("overlay-close-btn");
const navBarPositions = document.getElementById("hero-navbar");
const scrollOff = document.body;

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

// const dateSelection = document.querySelector(".inputs-box-date");
// dateSelection.addEventListener("change", (e) => {
//   console.log(e.target.value);
// })