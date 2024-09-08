// index.ts

// Get elements from the DOM
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const editButton = document.getElementById('idButton') as HTMLButtonElement; // Changed to match the actual button ID
const generateButton = document.getElementById('generateButton') as HTMLButtonElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

// Function to toggle the edit mode of the form
function toggleEditMode(): void {
  const inputs = resumeForm.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');

  if (editButton.textContent === 'Edit') {
    inputs.forEach(input => {
      input.removeAttribute('readonly');
      input.style.backgroundColor = '#fff';
    });
    editButton.textContent = 'Save';
  } else {
    inputs.forEach(input => {
      input.setAttribute('readonly', 'true');
      input.style.backgroundColor = '#f0f0f0';
    });
    editButton.textContent = 'Edit';
  }
}

// Function to generate the resume
function generateResume(event: Event): void {
  event.preventDefault();

  // Retrieve data from form fields
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

  // Generate the resume preview content
  resumeOutput.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h3>Education</h3>
    <p>${education.replace(/\n/g, '<br>')}</p>
    <h3>Skills</h3>
    <p>${skills.replace(/\n/g, '<br>')}</p>
    <h3>Experience</h3>
    <p>${experience.replace(/\n/g, '<br>')}</p>
  `;
}

// Event listeners for buttons
editButton.addEventListener('click', (event) => {  // Corrected to 'click' event
  event.preventDefault();
  toggleEditMode();
});

generateButton.addEventListener('click', generateResume);  // Corrected to 'click' event
