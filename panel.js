// Function to update the date and time dynamically
function updateDateTime() {
    const currentDate = new Date();
    const day = currentDate.toLocaleString('en-US', { weekday: 'short' });
    const month = currentDate.toLocaleString('en-US', { month: 'short' });
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate = `${day}, ${month} ${date} ${year}`;
    document.getElementById('current-date').textContent = formattedDate;

    const timeString = currentDate.toISOString().split('T')[1].split('.')[0];
    document.getElementById('current-time').textContent = `UTC: ${timeString}`;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Toggle Popup Display
function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = popup.style.display === 'none' ? 'flex' : 'none';
}

// Copy Link Function
function copyLink() {
    const link = document.querySelector(".link-group a").textContent;
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
}

// Generate a random string for the meeting link
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Show the "Create Panel" popup with a new random link
function showMeetingPopup() {
    const linkElement = document.getElementById('meeting-link');
    linkElement.textContent = generateRandomString(12);  // Set a random 12-character string
    togglePopup('popup');
}

// Show the "Join Panel" popup
function showJoinPopup() {
    togglePopup('join-popup');
}

// Event Listeners
document.getElementById("create-panel-btn").addEventListener("click", showMeetingPopup);
document.getElementById("join-panel-btn").addEventListener("click", showJoinPopup);

// Close Popup Buttons
document.querySelectorAll(".close-popup").forEach(button => {
    button.addEventListener("click", () => {
        togglePopup(button.closest(".popup-container").id);
    });
});
// Check if the URL ends with "index.html"
if (window.location.pathname.endsWith("panel.html")) {
    // Remove "index.html" from the URL
    window.history.pushState({}, "", window.location.pathname.replace("panel.html", ""));
}
