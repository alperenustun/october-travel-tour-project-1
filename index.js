const dropDownLinks = document.getElementById("drop-down-links");
const servicesLink = document.getElementById("services-link");

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
