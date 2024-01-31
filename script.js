const employees = [
    {
        name: "Ernestina Blay",
        picture: "img/ernestina.jpg",
        ratings: "4.2",
        reviewData: {
            january: {
                jobKnowledge: "Good",
                worksToFullPotential: "Excellent",
                qualityOfWork: "Satisfactory",
                communication: "Good",
                takesInitiatives: "Excellent",
                productivity: "Good",
                technicalSkills: "Satisfactory",
                dependability: "Excellent",
                punctuality: "Good",
                attendance: "Satisfactory",
                coworkerRelations: "Excellent"
            },
            // Add more months as needed
        },
        summaryComment: "Ernestina Blay is an exceptional employee."
    },
    {
        name: "Catherine Darko",
        picture: "img/cath.png",
        ratings: "4.5",
        reviewData: {
            january: {
                jobKnowledge: "Excellent",
                worksToFullPotential: "Excellent",
                qualityOfWork: "Excellent",
                communication: "Good",
                takesInitiatives: "Excellent",
                productivity: "Excellent",
                technicalSkills: "Excellent",
                dependability: "Excellent",
                punctuality: "Excellent",
                attendance: "Excellent",
                coworkerRelations: "Excellent"
            },
            // Add more months as needed
        },
        summaryComment: "Catherine Darko is an outstanding employee."
    },
    {
        name: "Janet",
        picture: "img/janet.jpeg",
        ratings: "3.8",
        reviewData: {
            january: {
                jobKnowledge: "Satisfactory",
                worksToFullPotential: "Good",
                qualityOfWork: "Good",
                communication: "Satisfactory",
                takesInitiatives: "Good",
                productivity: "Satisfactory",
                technicalSkills: "Good",
                dependability: "Satisfactory",
                punctuality: "Good",
                attendance: "Good",
                coworkerRelations: "Satisfactory"
            },
            // Add more months as needed
        },
        summaryComment: "Janet is a reliable and dedicated employee."
    },
    {
        name: "Elizabeth",
        picture: "img/lizzy.png",
        ratings: "4.0",
        reviewData: {
            january: {
                jobKnowledge: "Good",
                worksToFullPotential: "Good",
                qualityOfWork: "Good",
                communication: "Excellent",
                takesInitiatives: "Good",
                productivity: "Excellent",
                technicalSkills: "Good",
                dependability: "Good",
                punctuality: "Excellent",
                attendance: "Good",
                coworkerRelations: "Excellent"
            },
            // Add more months as needed
        },
        summaryComment: "Elizabeth is a highly communicative and efficient employee."
    },
    // Add more employee data as needed
];

// Function to populate the month selection dropdown
function populateMonthDropdown() {
    const monthSelect = document.getElementById("monthSelect");

    // Add options for each month
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    months.forEach(month => {
        const option = document.createElement("option");
        option.value = month.toLowerCase();
        option.text = month;
        monthSelect.appendChild(option);
    });
}

// Function to populate the employee selection dropdown
function populateEmployeeDropdown() {
    const employeeSelect = document.getElementById("employeeSelect");

    // Add options for each employee
    employees.forEach(employee => {
        const option = document.createElement("option");
        option.value = employee.name.toLowerCase().replace(/\s+/g, '-');
        option.text = employee.name;
        employeeSelect.appendChild(option);
    });
}

// Function to display attendance graph (dummy data)
function displayAttendanceGraph(employeeName) {
    const attendanceGraphDiv = document.getElementById("attendanceGraph");

    // Clear previous content
    attendanceGraphDiv.innerHTML = "";

    // Dummy data (replace with actual attendance data)
    const attendanceData = [23,];

    // Create a canvas element for the graph
    const canvas = document.createElement("canvas");
    canvas.id = "attendanceCanvas" + employeeName; // Unique ID for each employee's attendance graph
    attendanceGraphDiv.appendChild(canvas);

    // Render the attendance graph using Chart.js
    const ctx = document.getElementById("attendanceCanvas" + employeeName).getContext("2d");
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Jan"],
            datasets: [{
                label: 'Attendance (%)',
                data: attendanceData,
                borderColor: 'black',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Function to display employee performance
function displayEmployeePerformance(month, employee) {
    const employeePerformanceDiv = document.getElementById("employeePerformance");

    // Clear previous content
    employeePerformanceDiv.innerHTML = "";

    // Find employee data for the selected month and employee (you need a backend for this in a real scenario)
    const employeeData = employees.find(e => e.name.toLowerCase().replace(/\s+/g, '-') === employee);

    if (employeeData) {
        // Check if there is review data for the selected month
        const selectedReviewData = employeeData.reviewData && employeeData.reviewData[month];

        if (selectedReviewData) {
            const employeeCard = document.createElement("div");
employeeCard.className = "employee-card";

const employeeDetails = document.createElement("div");
employeeDetails.className = "employee-details";
employeeDetails.innerHTML = `
    <h2 class="employee-name">${employeeData.name}</h2>
    <p class="employee-ratings"><strong>Ratings:</strong> ${employeeData.ratings}</p>
    <div class="employee-ratings">
        <p><strong>Job Knowledge:</strong> ${selectedReviewData.jobKnowledge}</p>
        <p><strong>Works to Full Potential:</strong> ${selectedReviewData.worksToFullPotential}</p>
        <p><strong>Quality of Work:</strong> <span class="rating">${selectedReviewData.qualityOfWork}</span></p>
        <p><strong>Communication:</strong> <span class="rating">${selectedReviewData.communication}</span></p>
        <p><strong>Takes Initiatives:</strong> <span class="rating">${selectedReviewData.takesInitiatives}</span></p>
        <p><strong>Productivity:</strong> <span class="rating">${selectedReviewData.productivity}</span></p>
        <p><strong>Technical Skills:</strong> <span class="rating">${selectedReviewData.technicalSkills}</span></p>
        <p><strong>Dependability:</strong> <span class="rating">${selectedReviewData.dependability}</span></p>
        <p><strong>Punctuality:</strong> <span class="rating">${selectedReviewData.punctuality}</span></p>
        <p><strong>Attendance:</strong> <span class="rating">${selectedReviewData.attendance}</span></p>
        <p><strong>Coworker Relations:</strong> <span class="rating">${selectedReviewData.coworkerRelations}</span></p>
        <!-- Add more rating details as needed -->
    </div>
    <p class="summary-comment"><strong>Summary Comment:</strong> ${employeeData.summaryComment}</p>
`;

const employeePictureContainer = document.createElement("div");
employeePictureContainer.className = "employee-picture-container";
const employeePicture = document.createElement("img");
employeePicture.className = "employee-picture";
employeePicture.src = employeeData.picture;
employeePicture.alt = "Employee Picture";
employeePicture.style.width = "350px"; // Adjust the size as needed

employeePictureContainer.appendChild(employeePicture);

employeeCard.appendChild(employeeDetails);
employeeCard.appendChild(employeePictureContainer);
employeePerformanceDiv.appendChild(employeeCard);

            // Display the attendance graph only if review data is available
            displayAttendanceGraph(employeeData.name, attendanceData);
        } else {
            // Display an error message if no review data for the selected month
            const errorMessage = document.createElement("p");
            errorMessage.textContent = `No review data available for ${month}.`;
            errorMessage.className = "text-danger";
            employeePerformanceDiv.appendChild(errorMessage);
        }
    } else {
        // Display error message if no data is available for the selected employee
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "No performance data available for the selected employee.";
        errorMessage.className = "text-danger";
        employeePerformanceDiv.appendChild(errorMessage);
    }
}

// Event listener for month selection change
document.getElementById("monthSelect").addEventListener("change", function () {
    const selectedMonth = this.value;
    const selectedEmployee = document.getElementById("employeeSelect").value;
    displayEmployeePerformance(selectedMonth, selectedEmployee);
});

// Event listener for employee selection change
document.getElementById("employeeSelect").addEventListener("change", function () {
    const selectedEmployee = this.value;
    const selectedMonth = document.getElementById("monthSelect").value;
    displayEmployeePerformance(selectedMonth, selectedEmployee);
});

// Initialize the page with the default month and employee
const defaultMonth = "january"; // Set your default month here
const defaultEmployee = "ernestina-blay"; // Set your default employee here (convert name to lowercase and replace spaces with dashes)
populateMonthDropdown();
populateEmployeeDropdown();

// Display employee performance on page load
window.onload = function () {
    displayEmployeePerformance(defaultMonth, defaultEmployee);
};
