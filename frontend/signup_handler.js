function signUp() {
    // Get the values of the username and password fields
    const userName = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const name = document.getElementById("companyName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const service = document.getElementById("service").value;
    const description = document.getElementById("description").value;
    const address = document.getElementById("address").value;
    const numberOfEmployee = document.getElementById("numberOfEmployee").value;
    const password = document.getElementById("password").value;

    
    const user = {
      userName: userName,
      password: password,
      company: {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          service: service,
          description: description,
          address: address,
          numberOfEmployee: numberOfEmployee
      }
  };

    //const company = JSON.stringify({email,name,phoneNumber,service,description,address,numberOfEmployee})
    // Check if the required fields are empty
    if (!userName || !password) {
        // If any required field is empty, display an error message
        return; // Exit the function
    }
  
    // If all required fields are filled, proceed with the API call
    fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        if (!response.ok) {
          console.log(response.json)
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Save the user data in sessionStorage
        sessionStorage.setItem("userData", JSON.stringify(data));
        
        // Redirect the user to another page after saving the data
        window.location.href = "/sign-in.html"; // Adjust the URL as needed
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
              <div class="text-secondary">An error occurred!</div>
            </div>
          </div>
          <a class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
        `;
        document.getElementById("alerth").appendChild(alertDiv);
      });
}
