$(document).ready(function() {
    $('#submit').on('click', function(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#body').val();

        var formData = {
            access_key: '0283234d-c6e5-4880-83f0-c63b25d0bd25', // Replace with your actual access key
            email: email,
            name: name,
            phone: '', // You can add phone number field if needed
            message: message,
            botcheck: '' // You can add botcheck field if needed
        };

        // Show a message indicating that the form is being submitted
        $('#result').html('Submitting...');

        $.ajax({
            type: 'POST',
            url: 'https://api.web3forms.com/submit',
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done(function(response) {
            // Display a success message
            $('#result').html(response.message);

            // Reset form fields after a short delay
            setTimeout(function() {
                $('#name').val('');
                $('#email').val('');
                $('#subject').val('');
                $('#body').val('');
            }, 2000);

            // Refresh the page after a short delay
            setTimeout(function() {
                location.reload();
            }, 3000);
        })
        .fail(function(error) {
            // Display an error message
            console.log(error);
            $('#result').html('Something went wrong! Please try again.');
        });
    });
});
