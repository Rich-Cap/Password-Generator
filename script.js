var characterAmountNumber = document.getElementById("characterAmountNumber");
var characterAmountRange = document.getElementById("characterAmountRange");

characterAmountRange.addEventListener("input", syncCharacterAmount);
characterAmountNumber.addEventListener("input", syncCharacterAmount);

function syncCharacterAmount(i) {
	var value = i.target.value;
	characterAmountNumber.value = value;
	characterAmountRange.value = value;
}







var generateBtn = document.querySelector("#generate");

function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);