"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend (e) {
        console.log(form);
        e.preventDefault();

        let formData = new FormData(form);
        console.log(formData);

        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            let result = await response.json();
            alert(result.message);
            formPrewiew.innerHTML = '';
            form.reset();
        } else {
            alert ("Something went wrong...")
        }
    }
})