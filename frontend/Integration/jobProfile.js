export function fillJobData(jobData) {
    // Select the elements where the data needs to be filled
    const titleElement = document.querySelector('.fw-bold');
    const locationElement = document.querySelector('.card-title +  .mb-2 strong');
    const seniorityElement = document.querySelector('.card-title +  .mb-2 + .mb-2 strong');
    const salaryElement = document.querySelector('.card-title +  .mb-2 + .mb-2 + .mb-2 strong');
    const workTimeElement = document.querySelector('.card-title  + .mb-2 + .mb-2 + .mb-2 + .mb-2 strong');
    const employmentTypeElement = document.querySelector('.card-title  + .mb-2 + .mb-2 + .mb-2 + .mb-2 + .mb-2 strong');
    const descriptionElement = document.querySelector('.card-title  + .mb-2 + .mb-2 + .mb-2 + .mb-2 + .mb-2 + div strong');

    // Fill in the data
    titleElement.textContent = jobData.title;
    locationElement.textContent = jobData.location;
    seniorityElement.textContent = jobData.seniorityLevel;
    salaryElement.textContent = jobData.salary;
    workTimeElement.textContent = jobData.workTime;
    employmentTypeElement.textContent = jobData.employmentType;
    descriptionElement.textContent = jobData.description;
}