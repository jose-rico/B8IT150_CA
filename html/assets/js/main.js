/* Project: Web desing for Construcciones Manin, S.L - Author: Jose Maria Rico Leal - Javascript para el contact-form */
var form = document.getElementById("contact-form");


$(document).ready(function() {
	$("#contact-form").submit(function(event) {

		var is_error = false;
		var error_count = 0;
	

		var first_name = $("#first_name").val();
		if (first_name == "") {
			$("input#first_name").css("border-color", "#ff3333");
			is_error = true;
			error_count += 1;
			
			
		}

		var contact_number = $("#contact_number").val();
		if (contact_number == "") {
			$("input#contact_number").css("border-color", "#ff3333");
			is_error = true;
			error_count += 1;
			
			
		}
		
		var email = $("#email").val();
		if (email == "") {
			$("input#email").css("border-color", "#ff3333");
			is_error = true;
			error_count += 1;
		
		}
		

		if (is_error == true) {
			$("span#error-count").text(error_count);
			$("p#error-list").css("display", "block");
			event.preventDefault();			
		}

		
		$("#first_name").focusout(function(){
			$("input#first_name").css("border-color", "#dddddd");
		});
		$("#contact_number").focusout(function(){
			$("input#contact_number").css("border-color", "#dddddd");
		});
		
		$("#email").focusout(function(){
			$("input#email").css("border-color", "#dddddd");
		});
		
		
	});
});

 function print_out_error() {
            let inputFields = document.getElementsByClassName('form_input');
            let message =''; 
            for (var i = 0; i < inputFields.length; i++) {
                console.log(inputFields[i].value);
                if (inputFields[i].value === '') {
                        message = message + inputFields[i].getAttribute('name') + ' + ';
                }
            }

            let n = message.lastIndexOf("+");
            message = message.substring(0,n); 

            document.querySelector('#fail-message').innerHTML =
                'Por favor rellena tu ' +
                message +
                ' lo necesitamos para contactarte ;)!!!';
}







