document.addEventListener("DOMContentLoaded", function () {
   
    const scrollBtn = document.getElementById("scrollBtn");
    scrollBtn.addEventListener("click", function () {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });


 const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    scrollToTopBtn.addEventListener("click", function () {
        document.body.scrollIntoView({ behavior: "smooth" });
    });


    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Form submitted!");
    });
});
