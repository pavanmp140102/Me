    document.getElementById('submit').addEventListener('click', function() {
        // Fetch form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const body = document.getElementById('body').value;

        // Construct the form data to be submitted
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('body', body);

        // Send form data asynchronously
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // If form submission is successful, clear form fields
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('subject').value = '';
                document.getElementById('body').value = '';
                // Display a success message
                alert('Message sent successfully!');
            } else {
                // If form submission fails, display an error message
                alert('Form submission failed. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
