
        // Typing effect function
        const typingEffect = (element, text, speed) => {
            let i = 0;
            const interval = setInterval(() => {
                element.innerHTML += text.charAt(i);
                i++;
                if (i === text.length) {
                    clearInterval(interval);
                }
            }, speed);
        };

        document.addEventListener("DOMContentLoaded", () => {
            const typingElement = document.getElementById("typing-effect");
            const text = "Hi, Anish";
            typingEffect(typingElement, text, 100); // Speed of typing (100ms per character)
        });

 

        // Date and Time Update
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
        setInterval(updateDateTime, 1000);

// Modal handling for team members
const teamModal = document.getElementById('team-modal');
const closeBtn = document.querySelector('.close-btn');
const viewTeamButtons = document.querySelectorAll('.view-team-btn');

viewTeamButtons.forEach(button => {
    button.addEventListener('click', () => {
        // List of team members with their status and avatar URL
        const teamMembers = [
            { name: "Kathrene Anne Dimaano", status: "offline", avatar: "user.jpeg" },
            { name: "Saara Laiho", status: "offline", avatar: "user1.jpeg" },
            { name: "Harvie Edbrook", status: "online", avatar: "user2.jpeg" },
            { name: "Ervin Paul Rivera", status: "offline", avatar: "user3.jpeg" }
        ];

        // Select the team list and add team members dynamically
        const teamList = document.getElementById('team-list');
        teamList.innerHTML = teamMembers.map(member => {
            return `
                <li class="team-member">
                    <img src="${member.avatar}" alt="${member.name}" class="team-avatar">
                    <span>${member.name}</span>
                    <span class="status ${member.status}">
                        ${member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                        <span class="status-dot"></span>
                    </span>
                </li>
            `;
        }).join('');

        // Show the modal
        teamModal.style.display = 'block';
    });
});

// Close the modal when the user clicks on the close button
closeBtn.addEventListener('click', () => {
    teamModal.style.display = 'none';
});

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === teamModal) {
        teamModal.style.display = 'none';
    }
});

// Toggle dropdown visibility and arrow rotation
document.getElementById("user-dropdown-toggle").addEventListener("click", function (event) {
    event.stopPropagation();
    const dropdown = document.getElementById("user-dropdown");
    const userInfo = this.parentElement; // .user-info

    // Toggle dropdown visibility
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";

    // Toggle the active class for arrow rotation
    userInfo.classList.toggle("active", dropdown.style.display === "block");
});

// Close dropdown if clicked outside
document.addEventListener("click", function () {
    const dropdown = document.getElementById("user-dropdown");
    const userInfo = document.querySelector(".user-info");

    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        userInfo.classList.remove("active"); // Reset rotation
    }
});
// Sample attendance data (1 for present, 0 for absent)
const attendanceData = [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1];

// Function to generate the calendar with the current month's name
function generateCalendar() {
    const calendarContainer = document.getElementById('calendar');
    const monthNameContainer = document.getElementById('month-name');
    
    const date = new Date();
    const month = date.getMonth(); // Get current month (0-11)
    const year = date.getFullYear(); // Get current year
    const currentDay = date.getDate(); // Get today's date
    
    // Array of month names
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // Set the month name at the top of the calendar
    monthNameContainer.textContent = monthNames[month];

    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the current month
    const startDay = new Date(year, month, 1).getDay(); // Day of the week for the 1st of the month

    // Clear previous calendar content
    calendarContainer.innerHTML = '';
    
    // Create day names (Sun, Mon, etc.)
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayNames.forEach(day => {
        const dayNameElement = document.createElement('div');
        dayNameElement.classList.add('day-name');
        dayNameElement.textContent = day;
        calendarContainer.appendChild(dayNameElement);
    });

    // Add empty cells before the first day of the month
    for (let i = 0; i < startDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('empty');
        calendarContainer.appendChild(emptyCell);
    }

    // Add day cells with attendance data
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        
        // Check if the day is today
        if (i === currentDay) {
            dayElement.classList.add('current-day');
            dayElement.setAttribute('title', 'Current Day');
        } else if (i < currentDay) { // Only mark days before today
            const attendanceStatus = attendanceData[i - 1];
            if (attendanceStatus === 1) {
                dayElement.classList.add('present');
                dayElement.setAttribute('title', 'Present');
            } else if (attendanceStatus === 0) {
                dayElement.classList.add('absent');
                dayElement.setAttribute('title', 'Absent');
            }
        }

        // Add the day number inside the cell
        dayElement.textContent = i;
        calendarContainer.appendChild(dayElement);
    }
}

// Call the generateCalendar function when the page loads
window.onload = generateCalendar;



