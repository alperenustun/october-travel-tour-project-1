const dropDownLinks = document.getElementById("drop-down-links");
const servicesLink = document.getElementById("services-link");
const owerlayPopup = document.getElementById("homepage-hero-ower");
const contactOwerlay = document.getElementById("contact-owerlay");
const closeOwerlay = document.getElementById("owerlay-close-btn");
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
  owerlayPopup.style.display = "block";
}
closeOwerlay.addEventListener("click", () => {
  scrollOff.style.overflowY = "scroll";
  owerlayPopup.style.display = "none";
  navBarPositions.style.position = "static";
});