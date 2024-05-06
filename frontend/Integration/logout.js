function logOut(){
    sessionStorage.clear();
    window.location.href = 'index.html';
}

document.getElementById("logoutBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action of the button
    logOut();
});