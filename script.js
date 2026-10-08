document.querySelector("form").addEventListener("submit", function (event) {

  event.preventDefault();

  const name = document.querySelector('input[type="text"]').value;

  alert(
    "Thank you " + name + 
    "! Your course enquiry has been submitted."
  );

  

  this.reset();
});

function contactUs() {

    const contactSection =
        document.getElementById("contact");

    if (contactSection) {

        contactSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});
