export function makeAlert(errorMessage){
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
}