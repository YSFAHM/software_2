export function fillJobData(data) {
    // Select the elements where the data needs to be filled
    const titleElement = document.querySelector('.fw-bold');
    const locationElement = document.querySelector('.card-title +  .mb-2 strong');
    const emailElement = document.querySelector('.card-title +  .mb-2 + .mb-2 strong');
    const phoneNumberElement = document.querySelector('.card-title +  .mb-2 + .mb-2 + .mb-2 strong');
    const numberOfEmployeeElement = document.querySelector('.card-title  + .mb-2 + .mb-2 + .mb-2 + .mb-2 strong');
    const serviceElement = document.querySelector('.card-title  + .mb-2 + .mb-2 + .mb-2 + .mb-2 + .mb-2 strong');
    const descriptionElement = document.querySelector('.card-title  + .mb-2 + .mb-2 + .mb-2 + .mb-2 + .mb-2 + div strong');

    // Fill in the data
    titleElement.textContent = data.name;
    locationElement.textContent = data.address;
    emailElement.textContent = data.email;
    phoneNumberElement.textContent = data.phoneNumber;
    numberOfEmployeeElement.textContent = data.numberOfEmployee;
    serviceElement.textContent = data.service;
    descriptionElement.textContent = data.description;
}