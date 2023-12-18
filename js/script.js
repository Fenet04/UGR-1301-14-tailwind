function myFunction() {
    var x = document.querySelector(".nav__list");
    if (x.style.display === "block" || window.getComputedStyle(x).display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function validateContactForm() {
    const contactForm = document.querySelector('.forms');
    contactForm.addEventListener('submit', function (event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            event.preventDefault();
            alert('Please fill out all required fields.');
        }
    });
}



