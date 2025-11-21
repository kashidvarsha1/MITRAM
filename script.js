function goNext() {
    alert("Welcome to MITRAM");
    window.location.href = "personal.html"; // your next page
}
<script src="signin.js"></script>
function loginUser() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (email === "" || pass === "") {
        alert("Please fill all fields!");
        return;
    }

    alert("Login Successful (Demo)");

    // after login you can redirect
    // window.location.href = "home.html";
}

function loginUser() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (email === "" || pass === "") {
        alert("Please fill all fields!");
        return;
    }

    alert("Login Successful (Demo)");
}
