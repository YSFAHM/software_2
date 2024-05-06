import {addApp} from '../Requests/application.js';
const app = {
  "name": "",
  "email": "",
  "phoneNumber": "",
  "cvUrl": "",
  "jobId": ""
};
document.getElementById('showFormBtn').addEventListener('click', function() {
  document.getElementById('formContainer').classList.remove('hidden');
  document.getElementById('overlay').classList.remove('hidden');
});

document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('formContainer').classList.add('hidden');
  document.getElementById('overlay').classList.add('hidden');
});

document.getElementById('myForm').addEventListener('submit', function(event) {
  document.getElementById('formContainer').classList.add('hidden');
  document.getElementById('overlay').classList.add('hidden');
  event.preventDefault();
  const formData = new FormData(this);
  // Update app object with form data
  app.name = formData.get('name');
  app.email = formData.get('email');
  app.phoneNumber = formData.get('phoneNumber');
  app.cvUrl = formData.get('cv');

  // For demonstration purposes, log the updated app object
  app.jobId = jobId;
  //console.log(app);
  addApp(app)
            .then(data => {
              console.log(data);
              document.getElementById('successMessage').classList.remove('hidden');
              document.getElementById('errorMessage').classList.add('hidden');
            })
            .catch(error => {
                console.log(error.message);
                document.getElementById('errorMessage').classList.remove('hidden');
                document.getElementById('successMessage').classList.add('hidden');
            });
});