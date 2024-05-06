const id = sessionStorage.getItem('companyId');
const API_URL = 'http://localhost:8080/companies/' + id; // Replace with your API URL

// Function to fetch data from API and fill form fields
async function fetchData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        document.getElementById('companyName').value = data.name || '';
        document.getElementById('service').value = data.service || '';
        document.getElementById('address').value = data.address || '';
        document.getElementById('phoneNumber').value = data.phoneNumber || '';
        document.getElementById('numberOfEmployee').value = data.numberOfEmployee || '';
        document.getElementById('description').value = data.description || '';
        document.getElementById('email').value = data.email || '';
        document.getElementById('companyUpperName').innerHTML = data.name || '';
        document.getElementById('companyUpperService').innerHTML = data.service || '';
    } catch (error) {
        alertFunction(error.message,'danger',"Something Wrong Happened !");
    }
}

// Function to update data on API
async function updateData() {
    const requestData = {
        name: document.getElementById('companyName').value,
        service: document.getElementById('service').value,
        address: document.getElementById('address').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        numberOfEmployee: document.getElementById('numberOfEmployee').value,
        description: document.getElementById('description').value,
        email: document.getElementById('email').value
    };

    try {
        const response = await fetch(API_URL, {
            method: 'PUT', // or 'POST' if your API uses POST for updates
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
        if (response.ok) {
            alertFunction('Data updated Successfully','success',"Success !");
            setTimeout(function() {
                window.location.reload();
            }, 2000);
        } else {
            return response.json().then(errorResponse=>{
                alertFunction(errorResponse.message,'danger',"Something Wrong Happened !");
                
            });
        }
    } catch (error) {
        alertFunction('error','danger',"Something Wrong Happened !");
        



    }
}

async function alertFunction(errorMessage,type,header) {
    errorMessage = errorMessage || 'An error Occurred!'
    // Clear existing content of the alerth div
    document.getElementById("alerth").innerHTML = '';
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", "alert-"+type, "alert-dismissible");
    alertDiv.setAttribute("role", "alert");
    alertDiv.innerHTML = `
    <div class="d-flex">
        <div>
            <h4 class="alert-title">${header}</h4>
            <div class="text-secondary">${errorMessage}</div>
        </div>
    </div>
    <a class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
    `;
    document.getElementById("alerth").appendChild(alertDiv);

}

// Call fetchData function when page loads
window.onload = function () {
    fetchData();
};

// Attach event listener to update button
document.getElementById('updateBtn').addEventListener('click', updateData);