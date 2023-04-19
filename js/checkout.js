
// Exercise 7
function validate() {
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");


	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || fName.value.length < 3 || fName.value.match(/^[a-zA-Z]+$/){
		errorName.innerHTML
		error++;
	} // NO SE QUE ERROR HAY

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
