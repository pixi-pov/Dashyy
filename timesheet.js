let timers = {};
const inputFiles = document.getElementsByClassName("file");
const closeSuccessPopup = document.getElementsByClassName("success__close")[0];
const detailsBtn = document.getElementsByClassName("details-btn");
// JavaScript to toggle the popup visibility
const toggleCardDetails = () => {
  const popup = document.getElementById("popup");
  if (popup.style.display === "none" || popup.style.display === "") {
    popup.style.display = "block";
    loadProjectDetails();
  } else {
    popup.style.display = "none";
  }
};

detailsBtn[0].addEventListener("click", toggleCardDetails);
detailsBtn[1].addEventListener("click", toggleCardDetails);
detailsBtn[2].addEventListener("click", toggleCardDetails);
// Close the popup when the red circle is clicked
document.querySelector(".red.box").addEventListener("click", function () {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
});

// Function to load project details and hide the loader
function loadProjectDetails() {
  const loader = document.getElementById("loader");
  const projectDetails = document.getElementById("project-details");

  // Show loader initially, then after 2 seconds, show details and hide loader
  loader.style.display = "block";
  projectDetails.style.display = "none";
  loader.style.display = "none";
  projectDetails.style.display = "block";
}
const successUpload = () => {
  console.log("Arya")
  const successEle = document.getElementsByClassName("success")[0];
  successEle.style.display = "flex";
  const id = setTimeout(() => {
    successEle.style.display = "none";
  }, 2000);
  id.clearInterval();
};

inputFiles[0].addEventListener("change", successUpload);
inputFiles[1].addEventListener("change", successUpload);
inputFiles[2].addEventListener("change", successUpload);

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const projectDescription = document.getElementById("project-description");

  // Simulate loading time
  setTimeout(() => {
    loader.style.display = "none";
    projectDescription.style.display = "block";
  }, 1000); // Adjust time as needed
});
// Show modal when "View Sample" button is clicked
document.querySelector(".sample-button").addEventListener("click", function () {
  document.getElementById("imageModal").style.display = "block";
});

// Close modal function
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// close success popup
closeSuccessPopup.addEventListener("click", () => {
  const successPopup = document.getElementsByClassName("success")[0];

  successPopup.style.display = "none";
});


document.addEventListener("DOMContentLoaded", () => {
  // Date and Time Update
  function updateDateTime() {
    console.log("date and time");
    const currentDate = new Date();
    const day = currentDate.toLocaleString("en-US", { weekday: "short" });
    const month = currentDate.toLocaleString("en-US", { month: "short" });
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate = `${day}, ${month} ${date} ${year}`;
    document.getElementById("current-date").textContent = formattedDate;

    const timeString = currentDate.toISOString().split("T")[1].split(".")[0];
    document.getElementById("current-time").textContent = `UTC: ${timeString}`;
  }
  setInterval(updateDateTime, 1000);
});
// Function to show the "Action Not Allowed" modal
function showActionNotAllowedModal() {
  const modal = document.getElementById("action-not-allowed-modal");
  modal.style.display = "flex";
}

// Get all "Manage" buttons
const manageButtons = document.querySelectorAll(".view-team-btn");

// Add event listener to each "Manage" button
manageButtons.forEach((button) => {
  button.addEventListener("click", showActionNotAllowedModal);
});

// Close modal when user clicks the close button (X)
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  const modal = document.getElementById("action-not-allowed-modal");
  modal.style.display = "none";
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
  const modal = document.getElementById("action-not-allowed-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
