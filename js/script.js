

const loginForm =
document.getElementById("loginForm");

const loginMessage =
document.getElementById("loginMessage");

if (loginForm){
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email =
    document.getElementById("email").value;
    const password =
    document.getElementById("password").value;
    

    
    if (email === "admin@school.com" && password === "admin123") {
        loginMessage.textContent = "Login succesful";
        loginMessage.style.color = "green"
        setTimeout(function(){
            window.location.href = "dashboard.html";
        }, 1000 );
    } else {
        loginMessage.textContent = "Invalid email or password.";
        loginMessage.style.color = "red";
    }
   
});
}

document.addEventListener("DOMContentLoaded", function (){
const schoolForm =
document.getElementById("schoolForm");

if (schoolForm) {
    schoolForm.addEventListener("submit", function(event){
        event.preventDefault();
        alert("Form detected!")
        const school = {
            name:
            document.getElementById("schoolName").value,
            code:
            document.getElementById("schoolCode").value,
            location:
            document.getElementById("location").value,
            phone:
            document.getElementById("phone").value,
            email:
            document.getElementById("schoolEmail").value,
            adminName:
            document.getElementById("adminName").value,
            adminEmail:
            document.getElementById("adminEmail").value
        };
        localStorage.setItem("school",JSON.stringify(school));
        alert ("School registered successfully");
        window.location.href = "schools.html"
    });
}
});

const schoolList = document.getElementById("schoolList");

if (schoolList) {

    const savedSchool = localStorage.getItem("school");

    if (savedSchool) {

        const school = JSON.parse(savedSchool);

        schoolList.innerHTML = `
            <div class=”school-card”>
                <h3>${school.name}</h3>
                <p><strong>School Code:</strong> ${school.code}</p>
                <p><strong>Location:</strong> ${school.location}</p>
                <p><strong>Phone:</strong> ${school.phone}</p>
                <p><strong>Email:</strong> ${school.email}</p>
                <p><strong>Administrator:</strong> ${school.adminName}</p>
                <p><strong>Admin Email:</strong> ${school.adminEmail}</p>
            </div>
        `;

    } else {

        schoolList.innerHTML = "<p>No schools registered yet.</p>";

    }

}
const schoolTableBody =
document.getElementById("schoolTableBody")
const savedSchool = 
JSON.parse(localStorage.getItem("school"));
if(savedSchool){
    schoolTableBody.innerHTML = 
    `<tr>
        <td>${savedSchool.name}</td>
        <td>${savedSchool.location}</td>
        <td>Active</td>
        <td>
        <button>View</button>
        <button>Edit</button>
        </td>
        </tr>
        `;
}
