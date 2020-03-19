var generateBtn = document.querySelector("#generate");

function writePassword(){
	alert("Please select criteria to generate a password");
	prompt("Type a number to choose length of password. Must be between 8 to 128 characters.");
	prompt("Type 'yes' to include lowercase or press cancel.");
	prompt("Type 'yes' to include UPPERCASE or press cancel.");
	prompt("Type 'yes' to include Numbers or press cancel.");
	prompt("Type 'yes' to include Special Characters or press cancel.");
	{
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

	

}

generateBtn.addEventListener("click", writePassword);



// 
var characterAmountNumber = document.getElementById("characterAmountNumber");
var characterAmountRange = document.getElementById("characterAmountRange");

characterAmountRange.addEventListener("input", syncCharacterAmount);
characterAmountNumber.addEventListener("input", syncCharacterAmount);

function syncCharacterAmount(i) {
	var value = i.target.value;
	characterAmountNumber.value = value;
	characterAmountRange.value = value;
}