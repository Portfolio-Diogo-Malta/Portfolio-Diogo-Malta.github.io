document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    saveContactInfo(name, email, message);

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, message);
}

//Send Email

function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "youcraft585@gmail.com",
        Password: "cordscpugamvbolf",
        To: "youcraft585@gmail.com",
        From: "youcraft585@gmail.com",
        Subject: `${name} send you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}` ,
    }).then(message => alert("mail sent successfully"));
}