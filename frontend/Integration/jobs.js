import {getAllJobsForCompany} from '../Requests/job.js';
import {getJobById} from '../Requests/job.js';
import {updateJob} from '../Requests/job.js';
import {deleteJobById} from '../Requests/job.js';
import {addJob} from '../Requests/job.js';


const companyId = sessionStorage.getItem('companyId');
let currentJobId ;
if(companyId)
{
    getAllJobsForCompany(companyId)
        .then(data => {
                for(let i = 0; i < data.length ; ++i)
                {
                    addCard(data[i]);
                }
            })
            .catch(error => {
                console.log(error);
            });
}

function addCard(cardData) {
    // Create elements
    var cardContainer = document.querySelector('.space-y');
    var newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.dataset.id = cardData.id;
    var cardContent = `
      <div class="row g-0">
        <div class="col-auto">
          <div class="card-body">
          </div>
        </div>
        <div class="col">
          <div class="card-body ps-0">
            <div class="row">
              <div class="col">
                <h3 class="mb-0">${cardData.title}</h3>
              </div>
              <div class="col-auto fs-3 text-green">${cardData.salary}</div>
            </div>
            <div class="row">
              <div class="col-md">
                <div class="mt-3 list-inline list-inline-dots mb-0 text-muted d-sm-block d-none">
                  <div class="list-inline-item">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" /><path d="M9 7l4 0" /><path d="M9 11l4 0" /></svg>
                            ${cardData.employmentType}</div>
                  <div class="list-inline-item">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                    ${cardData.location}</div>
                    <div class="list-inline-item">${cardData.seniorityLevel}</div>
                    <div class="list-inline-item">${cardData.workTime} hour</div>
                    <div class="list-inline-item">${cardData.description}</div>
                </div>
              </div>
              <div class="col-md-auto">
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Set card content
    newCard.innerHTML = cardContent;
    
    // Append new card to container
    cardContainer.appendChild(newCard);
    newCard.addEventListener('mouseenter', function() {
      newCard.classList.add('hovered');
    });
    
    newCard.addEventListener('mouseleave', function() {
      newCard.classList.remove('hovered');
    });
    
    newCard.addEventListener('click', function() {
      // Log the hidden ID to the console
      const jobId = newCard.dataset.id;
      currentJobId =jobId;
      showForm();
      getJobById(jobId)
        .then(data => {
                fillForm(data);
            })
            .catch(error => {
                console.log(error);
            });
    });

}


function showForm() {
    document.getElementById("overlay").style.display = "block";
}
// Function to hide the hidden form
function hideForm() {
    document.getElementById("overlay").style.display = "none";
}
function showAddJobForm() {
  document.getElementById('addOverlay').style.display = 'block';
}
// Function to hide the add job form
function hideAddJobForm() {
  document.getElementById('addOverlay').style.display = 'none';
}

function fillForm(jsonData) {
    document.getElementById("title").value = jsonData.title;
    document.getElementById("location").value = jsonData.location;
    document.getElementById("seniorityLevel").value = jsonData.seniorityLevel;
    document.getElementById("salary").value = jsonData.salary;
    document.getElementById("Udescription").value = jsonData.description;
    document.getElementById("workTime").value = jsonData.workTime;
    document.getElementById("employmentType").value = jsonData.employmentType;
}

function gatherFormData() {
    var formData = {
        title: document.getElementById("title").value,
        location: document.getElementById("location").value,
        seniorityLevel: document.getElementById("seniorityLevel").value,
        salary: document.getElementById("salary").value,
        description: document.getElementById("Udescription").value,
        workTime: document.getElementById("workTime").value,
        employmentType: document.getElementById("employmentType").value
    };
    return formData;
}

function gatherAddingFormData() {
  var formData = {
      title: document.getElementById("titleAdd").value,
      location: document.getElementById("locationAdd").value,
      seniorityLevel: document.getElementById("seniorityLevelAdd").value,
      salary: document.getElementById("salaryAdd").value,
      description: document.getElementById("descriptionAdd").value,
      workTime: document.getElementById("workTimeAdd").value,
      employmentType: document.getElementById("employmentTypeAdd").value
  };
  return formData;
}

document.getElementById("cancelUpdateBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action of the button
    hideForm();
    currentJobId = null;
});
document.getElementById("updateJobBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action of the button
    const formData = gatherFormData();
    formData.companyId = companyId;
    goUp();
    updateJob(currentJobId,formData)
    .then(data => {
        hideForm();
        document.getElementById('successMessage').innerText = 'Updated Successfully';;
        document.getElementById('successMessage').classList.remove('hidden');
        document.getElementById('errorMessage').classList.add('hidden');
        // Wait for 5 seconds before reloading the page
        setTimeout(function() {
            location.reload();
        }, 3000); // 3000 milliseconds = 3 seconds
    })
    .catch(error => {
        hideForm();
        //document.getElementById('errorMessage').innerText = error;
        document.getElementById('errorMessage').classList.remove('hidden');
        document.getElementById('successMessage').classList.add('hidden');
    });
    
});
document.getElementById("deleteJobBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action of the button
    var confirmation = confirm("Are you sure?");
    if(confirmation)
    {
        goUp();
        if(currentJobId){
            deleteJobById(currentJobId)
            .then(data => {
                hideForm();
                document.getElementById('successMessage').innerText = 'Deleted Successfully';
                document.getElementById('successMessage').classList.remove('hidden');
                document.getElementById('errorMessage').classList.add('hidden');
                // Wait for 5 seconds before reloading the page
                setTimeout(function() {
                    location.reload();
                }, 3000); // 3000 milliseconds = 3 seconds
            })
            .catch(error => {
                //console.log(error);
                //document.getElementById('errorMessage').innerText = error;
                hideForm();
                document.getElementById('errorMessage').classList.remove('hidden');
                document.getElementById('successMessage').classList.add('hidden');
            });
        }
    }
    
});

document.getElementById("appsOfJobBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action of the button
    const url = `appProfile.html?id=${currentJobId}`;
    // Redirect the user to the jobProfile page
    window.location.href = url;
});
function goUp(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: smooth scrolling behavior
    });
}

document.getElementById("addBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default action of the button
  showAddJobForm();
});

document.getElementById("cancelAddBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default action of the button
  hideAddJobForm();
});

document.getElementById("addJobBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default action of the button
  const job = gatherAddingFormData();
  if(job)
  {
    job.companyId = companyId;
    addJob(job)
            .then(data => {
              hideAddJobForm();
                document.getElementById('successMessage').innerText = 'Added Successfully';
                document.getElementById('successMessage').classList.remove('hidden');
                document.getElementById('errorMessage').classList.add('hidden');
                setTimeout(function() {
                    location.reload();
                }, 3000); // 3000 milliseconds = 3 seconds
            })
            .catch(error => {
                hideAddJobForm();
                console.log(error);
                document.getElementById('errorMessage').innerText = error;
                document.getElementById('errorMessage').classList.remove('hidden');
                document.getElementById('successMessage').classList.add('hidden');
            });
  }
});
