const employees = [
    {
        name: "Ernestina Blay",
        picture: "img/ernestina.jpg",
        ratings: "4.5",
        reviewData: {
            january: {
                jobKnowledge: "Good",
                worksToFullPotential: "Excellent",
                qualityOfWork: "Excellent",
                communication: "Good",
                takesInitiatives: "Excellent",
                productivity: "Good",
                technicalSkills: "Good",
                dependability: "Excellent",
                punctuality: "Excellent",
                attendance: "Excellent",
                coworkerRelations: "Excellent"
            },
            // Add more months as needed
        },
        summaryComment: "Ernestina's performance over the past months has been consistently outstanding. She excels in virtually every aspect of her role, from her technical skills to her interpersonal abilities. Her dedication, initiative, and commitment to excellence make her a valuable asset to our team."
    },
    {
        name: "Catherine Darko",
        picture: "img/cath.png",
        ratings: "4.5",
        reviewData: {
            january: {
                jobKnowledge: "Good",
                worksToFullPotential: "Excellent",
                qualityOfWork: "Excellent",
                communication: "Good",
                takesInitiatives: "Excellent",
                productivity: "Good",
                technicalSkills: "good",
                dependability: "Excellent",
                punctuality: "Excellent",
                attendance: "Excellent",
                coworkerRelations: "Excellent"
            },
            // Add more months as needed
        },
        summaryComment: "Catherine's performance over the past months has been truly exceptional, reflecting her unwavering commitment to excellence in every task she undertakes. Her remarkable work ethic, coupled with a keen attention to detail and proactive problem-solving approach, sets her apart as a standout member of our team. Catherine consistently fosters positive relationships with colleagues and customers alike, contributing to a supportive and collaborative work environment."
    },
    {
        name: "Janet Aduamah",
        picture: "img/janet.jpeg",
        ratings: "3.5",
        reviewData: {
            january: {
                jobKnowledge: "Good",
                worksToFullPotential: "Good",
                qualityOfWork: "Good",
                communication: "Good",
                takesInitiatives: "Good",
                productivity: "Satisfactory",
                technicalSkills: "Satisfactory",
                dependability: "Good",
                punctuality: "Excellent",
                attendance: "Excellent",
                coworkerRelations: "Excellent"
            },
            // Add more months as needed
        },
        summaryComment: " Janet's performance over the past months has shown improvement, particularly in her willingness to address basic troubleshooting tasks and seek assistance when needed. While there is still room for growth in areas such as technical skills and initiative, her punctuality, attendance, and positive relationships with colleagues are commendable. With continued effort and development, Janet has the potential to further enhance her contributions to the team."
    },
    {
        name: "Elizabeth Lartey",
        picture: "img/lizzy.jpeg",
        ratings: "2.5",
        reviewData: {
            january: {
                jobKnowledge: "Satisfactory",
                worksToFullPotential: "Satisfactory",
                qualityOfWork: "Satisfactory",
                communication: "Satisfactory",
                takesInitiatives: "Unsatisfactory",
                productivity: "Satisfactory",
                technicalSkills: "Unsatisfactory",
                dependability: "Satisfactory",
                punctuality: "Good",
                attendance: "Good",
                coworkerRelations: "Satisfactory"
            },
            // Add more months as needed
        },
        summaryComment: "Elizabeth's performance is below expectations, particularly in areas such as technical skills, initiative-taking, and accuracy in providing information. She must prioritize improving her troubleshooting abilities and seeking assistance when needed rather than relying solely on her colleagues. Additionally, addressing her backbiting habits is crucial for fostering positive coworker relations and enhancing overall team dynamics. With concerted effort and a willingness to learn, Elizabeth has the potential to improve and contribute more effectively to the team."
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

function downloadEmployeeInfo() {
    // Select the employee performance div
    const employeePerformanceDiv = document.getElementById("employeePerformance");

    // Use html2canvas to convert the employee performance div into an image
    html2canvas(employeePerformanceDiv).then(function(canvas) {
        // Convert canvas to PNG image data
        const imageData = canvas.toDataURL('image/png');

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = imageData;
        link.download = 'employee-info.png';

        // Trigger a click event on the link to start download
        link.click();
    });
}

// Event listener for the download button click
document.getElementById("downloadButton").addEventListener("click", function(event) {
    // Prevent the default behavior of the button
    event.preventDefault();

    // Call the downloadEmployeeInfo() function
    downloadEmployeeInfo();
});

function captureEmployeePerformance() {
    const employeePerformanceDiv = document.getElementById("employeePerformance");

    // Check if there's content to capture
    if (employeePerformanceDiv.querySelector('.employee-card')) {
        // Delay the capture process by 500 milliseconds to ensure content is rendered
        setTimeout(function() {
            html2canvas(employeePerformanceDiv).then(canvas => {
                // Convert canvas to PNG image data
                const imageData = canvas.toDataURL('image/png');

                // Create a temporary link element
                const link = document.createElement('a');
                link.href = imageData;
                link.download = 'employee-info.png';

                // Trigger a click event on the link to start download
                link.click();
            });
        }, 500); // Adjust the delay time as needed
    } else {
        alert("No employee performance data available to capture.");
    }
}
