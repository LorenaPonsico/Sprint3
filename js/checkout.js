
// Exercise 7

function addInvalidClass(element, error) {
	if (error) {
		element.classList.add("is-invalid");
	} else {
		element.classList.remove("is-invalid");
		element.classList.add("is-valid");
	}
};

function validate() {
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value == "" || fName.value.length < 3 || !fName.value.match(/^[a-zA-Z]+$/)) {
		addInvalidClass(fName, true);
		error++;
	} else {
		addInvalidClass(fName, false);
	}

	if (fEmail.value == "" || fEmail.value.length < 3 || !fEmail.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
		addInvalidClass(fEmail, true);
		error++;
	} else {
		addInvalidClass(fEmail, false);
	}

	if (fAddress == "" || fAddress.value.length < 3) {
		addInvalidClass(fAddress, true);
		error++;
	} else {
		addInvalidClass(fAddress, false);
	}

	if (fLastN == "" || fLastN.value.length < 3 || !fLastN.value.match(/^[a-zA-Z]+$/)) {
		addInvalidClass(fLastN, true);
		error++;
	} else {
		addInvalidClass(fLastN, false);
	}
	if (fPassword == "" || fPassword.value.length < 3 || !fPassword.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{3,8}$/)) {
		addInvalidClass(fPassword, true);
		error++;
	} else {
		addInvalidClass(fPassword, false);
	}

	if (fPhone == "" || fPhone.value.length < 3 || isNaN(fPhone.value)) {
		addInvalidClass(fPhone, true);
		error++;
	} else {
		addInvalidClass(fPhone, false);
	}

	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	} 
}
