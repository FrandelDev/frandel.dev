
function addEmailService(){

(function() {
    emailjs.init("5WrkQk8HZxIkpSsu6");// CUIDADO CON LO QUE HACES CON ESTO >.<
})();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('1', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
                document.querySelector("#socials").insertAdjacentHTML("beforebegin","<h2 class='status-mail-success'>Mensaje enviado exitosamente</h2>");
                setTimeout(()=>document.querySelector(".status-mail-success").remove(),5000);
            }, function(error) {
                console.log('FAILED...', error);
                document.querySelector("#socials").insertAdjacentHTML("beforebegin","<h6 class='status-mail-error'>Esta función no está disponible por el momento, por favor intente con otro método.</h6>");
            });
            event.target.reset()
    });
}
}

export default addEmailService;