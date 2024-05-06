import {getAppsByJobId} from '../Requests/application.js';
import {deleteAppById} from '../Requests/application.js';
import {getJobById} from '../Requests/job.js';

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const jobId = getQueryParam('id');
window.jobId = jobId;
let jobName = "Test"
if(jobId)
{
    getJobById(jobId)
    .then(data => {
        jobName = data.title;
        getApps(jobId);
    })
    .catch(error => {
        console.log(error);
    });
    
}

function getApps(jobId){
    getAppsByJobId(jobId)
    .then(data => {
        for(let i = 0 ; i < data.length ; ++i)
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
                            <h2 class="mb-0">${jobName}</h2>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col">Name : ${cardData.name}</div>
                    </div>
                    <div class="row">
                        <div>Email : ${cardData.email}</div>
                    </div>
                    <div class="row">
                        <div>Phone Number : ${cardData.phoneNumber}</div>
                    </div>
                    <div class="row">
                        <div>CV : ${cardData.cvUrl}</div>
                    </div>
            </div>
                <div class="text-end">
                    <button type="button" class="btn btn-primary deleteAppBtn">Delete</button>
                </div>
                <br>
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

    // Event listener for clicking delete button
    newCard.querySelector('.deleteAppBtn').addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default action of the button
        
        var confirmation = confirm("Are you sure?");
        if(confirmation) {
            goUp();
            const currentJobId = newCard.dataset.id;
            
            // Perform delete operation
            deleteAppById(currentJobId)
                .then(data => {
                    document.getElementById('successMessage').innerText = 'Deleted Successfully';
                    document.getElementById('successMessage').classList.remove('hidden');
                    document.getElementById('errorMessage').classList.add('hidden');
                    // Wait for 3 seconds before reloading the page
                    setTimeout(function() {
                        location.reload();
                    }, 3000); // 3000 milliseconds = 3 seconds
                })
                .catch(error => {
                    document.getElementById('errorMessage').classList.remove('hidden');
                    document.getElementById('successMessage').classList.add('hidden');
                });
        }
    });
}


function goUp(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: smooth scrolling behavior
    });
}
