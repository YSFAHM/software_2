function signIn() {
    // Get the values of the username and password fields
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    var errorMessage = "An Error Occured";
    // Check if the required fields are empty
    if (!userName || !password) {
        // If any required field is empty, display an error message
        return; // Exit the function
    }

    // If all required fields are filled, proceed with the API call
    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userName, password })
    })
      .then(response => {
        if (!response.ok) {
          if(response.status===401){
            errorMessage = "user name or password is wrong";
          }

          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Save the user data in sessionStorage
        sessionStorage.setItem("userData", JSON.stringify(data));
        sessionStorage.setItem("companyId", JSON.stringify(data.companyid));
        
        // Redirect the user to another page after saving the data
        window.location.href = "/jobs.html"; // Adjust the URL as needed
      })
      .catch(error => {
        // Clear existing content of the alerth div
        document.getElementById("alerth").innerHTML = '';
        
        // Display error message
        const alertDiv = document.createElement("div");
        alertDiv.classList.add("alert", "alert-danger", "alert-dismissible");
        alertDiv.setAttribute("role", "alert");
        alertDiv.innerHTML = `
          <div class="d-flex">
            <div>
              <h4 class="alert-title">There is something wrong!</h4>
              <div class="text-secondary">${errorMessage}</div>
            </div>
          </div>
          <a class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
        `;
        document.getElementById("alerth").appendChild(alertDiv);
      });
}
