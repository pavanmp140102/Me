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

        $.ajax({
            type: 'POST',
            url: 'https://api.web3forms.com/submit',
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done(function(response) {
            // Display a pop-up with the response message
            alert(response.message);
            // Reset form fields
            $('#name').val('');
            $('#email').val('');
            $('#subject').val('');
            $('#body').val('');
        })
        .fail(function(error) {
            console.log(error);
            $('#result').html('Something went wrong!');
        });
    });
});
