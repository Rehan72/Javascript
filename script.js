// Get references to the navigation links and content sections
const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");
const serviceLink = document.getElementById("service-link");
const formButton = document.getElementById("form-Content");
const homeSection = document.getElementById("home-section");
const aboutSection = document.getElementById("about-section");
const contactSection = document.getElementById("contact-section");
const mainSection = document.getElementById("main-section");
const serviceSection = document.getElementById("service-section");
const formSection = document.getElementById("formSection");
// Add event listeners to the navigation links
homeLink.addEventListener("click", () => {
    showSection(homeSection);
    hideSection(aboutSection);
    hideSection(mainSection);
    hideSection(contactSection);
    hideSection(serviceSection)
});

aboutLink.addEventListener("click", () => {
    showSection(aboutSection);
    hideSection(homeSection);
    hideSection(contactSection);
    hideSection(mainSection);
    hideSection(serviceSection)
});

serviceLink.addEventListener("click", () => {
    showSection(serviceSection);
    hideSection(aboutSection);
    hideSection(mainSection);
    hideSection(homeSection);
    hideSection(contactSection);
});
contactLink.addEventListener("click", () => {
    showSection(contactSection);
    hideSection(homeSection);
    hideSection(aboutSection);
    hideSection(mainSection);
    hideSection(serviceSection)
});

// Function to show a section
function showSection(section) {
    section.style.display = "block";
}

// Function to hide a section
function hideSection(section) {
    if (section) {
        section.style.display = "none";
    }
}


document.addEventListener("click", function() {
    const form = document.getElementById("form-Content");

    form.addEventListener("Submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting
    });

     // Get form values
     const firstName = document.getElementById("firstName").value;
     const lastName = document.getElementById("lastName").value;
     const email = document.getElementById("email").value;
     const phoneNo = document.getElementById("phoneNo").value;
     // Do something with the form values (e.g., display them)
     console.log("Form:", firstName,lastName,email,phoneNo);
    //  form.reset();
});