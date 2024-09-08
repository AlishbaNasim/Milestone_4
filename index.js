// index.ts
// Get elements from the DOM
var resumeForm = document.getElementById('resumeForm');
var editButton = document.getElementById('idButton'); // Changed to match the actual button ID
var generateButton = document.getElementById('generateButton');
var resumeOutput = document.getElementById('resumeOutput');
// Function to toggle the edit mode of the form
function toggleEditMode() {
    var inputs = resumeForm.querySelectorAll('input, textarea');
    if (editButton.textContent === 'Edit') {
        inputs.forEach(function (input) {
            input.removeAttribute('readonly');
            input.style.backgroundColor = '#fff';
        });
        editButton.textContent = 'Save';
    }
    else {
        inputs.forEach(function (input) {
            input.setAttribute('readonly', 'true');
            input.style.backgroundColor = '#f0f0f0';
        });
        editButton.textContent = 'Edit';
    }
}
// Function to generate the resume
function generateResume(event) {
    event.preventDefault();
    // Retrieve data from form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Generate the resume preview content
    resumeOutput.innerHTML = "\n    <h2>".concat(name, "</h2>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <h3>Education</h3>\n    <p>").concat(education.replace(/\n/g, '<br>'), "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills.replace(/\n/g, '<br>'), "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience.replace(/\n/g, '<br>'), "</p>\n  ");
}
// Event listeners for buttons
editButton.addEventListener('click', function (event) {
    event.preventDefault();
    toggleEditMode();
});
generateButton.addEventListener('click', generateResume); // Corrected to 'click' event
