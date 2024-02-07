$(document).ready(function() {
    $("#submit").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var body = $("#body").val();
        
        $.ajax({
            type: "POST",
            url: "https://api.web3forms.com/submit",
            data: {
                access_key: "0283234d-c6e5-4880-83f0-c63b25d0bd25",
                name: name,
                email: email,
                subject: subject,
                body: body
            },
            dataType: "json",
            success: function(response) {
                $("#result").text("Form submitted successfully!");
                $("#name").val(""); // Clearing the name field
                $("#email").val(""); // Clearing the email field
                $("#subject").val(""); // Clearing the subject field
                $("#body").val(""); // Clearing the body field
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
                $("#result").text("An error occurred while submitting the form.");
            }
        });
    });
});
