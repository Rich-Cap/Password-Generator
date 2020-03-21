var generateBtn = document.querySelector("#generate");

function writePassword(){
	alert("Please select criteria to generate a password");
	var length = prompt("Type a number to choose length of password. Must be between 8 to 128 characters.");
	var lower = prompt("Type 'yes' to include lowercase or press cancel.");
// 	var upper = prompt("Type 'yes' to include UPPERCASE or press cancel.");
// 	var number = prompt("Type 'yes' to include Numbers or press cancel.");
// 	var symbol = prompt("Type 'yes' to include Special Characters or press cancel.");


// 	function randomLower(){
// 		return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// 	}
// 	function randomUpper(){
// 		return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// 	}
// 	function randomNumber(){
// 		return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// 	}
// 	function randomSymbol(){
// 		var symbols = "!#$%&'*+,-./:;<=>?@\^_`|~"
// 		return symbols[Math.floor(Math.random() * symbols.length];
// 	}
	
	{
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

}


function randomLower(){
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUpper(){
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomNumber(){
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomSymbol(){
	var symbols = "!#$%&'*+,-./:;<=>?@\^_`|~"
	return symbols[Math.floor(Math.random() * symbols.length)];
}

generateBtn.addEventListener("click", writePassword);


// Page elements functionality
var characterAmountNumber = document.getElementById("characterAmountNumber");
var characterAmountRange = document.getElementById("characterAmountRange");

characterAmountRange.addEventListener("input", syncCharacterAmount);
characterAmountNumber.addEventListener("input", syncCharacterAmount);

function syncCharacterAmount(i) {
	var value = i.target.value;
	characterAmountNumber.value = value;
	characterAmountRange.value = value;
}