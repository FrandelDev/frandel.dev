
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
            }, function(error) {
                console.log('FAILED...', error);
            });
            event.target.reset()
    });
}
}

export default addEmailService;