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


let doIt = () => {
	let tab = document.getElementById("tab1");
	let rows = tab1.getElementsByTagName('tr');
	fetch('https://jose.dbsprojects.ie:8080/')
		.then(response => response.json())
		.then(data => {
			data.Results.forEach(
				x => {
					let newRow = rows[0].cloneNode(true);
					let divs = newRow.getElementsByTagName('td');
					divs[0].innerHTML = x['ID'];
					divs[1].innerHTML = x['Name'];
					divs[2].innerHTML = x['Email'];
					tab1.appendChild(newRow);
				}
			);
			tab1.setAttribute("style", "\"\"");
		}
		);
}
//Script deleting records
baseURL = 'https://jose.dbsprojects.ie:8080/'
let delButton = document.getElementById('delb');
let deleteStudent = (event) => {
	let id = document.getElementById('id').value;
	fetch(baseURL + 'delete?id=' + id).then((resp) => {
		alert("Student Deleted");//Obviously check success first
	});
}
delButton.addEventListener("click", deleteStudent);

//Adding students
baseURL = 'https://jose.dbsprojects.ie:8080/';
let addButton = document.getElementById('adlb');
let name = document.getElementById('name');
let email = document.getElementById('email');
let addStudent = () => {
	fetch(baseURL + 'add?name=' + document.getElementById('name').value + '&email=' + document.getElementById('email').value).then((resp) => {
		alert("Student Added");
	}
	);
}
addButton.addEventListener("click", addStudent);

//Updating students
baseURL = 'https://jose.dbsprojects.ie:8080/';

let updStudent = () => {
	fetch(baseURL + 'update?id=' + uid.value + '&name=' + uname.value + '&email=' + uemail.value).then((resp) => { alert("Student Updated"); }
	);
}




