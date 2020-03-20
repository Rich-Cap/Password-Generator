var generateBtn = document.querySelector("#generate");

function writePassword(){
	alert("Please select criteria to generate a password");
	var number = prompt("Type a number to choose length of password. Must be between 8 to 128 characters.");
	if (number >= 8 && number <= 128){
		prompt("Type 'yes' to include lowercase or press cancel.")
	} else prompt("Type 'yes' to include UPPERCASE or press cancel.");
	// prompt("Type 'yes' to include UPPERCASE or press cancel.");
	// prompt("Type 'yes' to include Numbers or press cancel.");
	// prompt("Type 'yes' to include Special Characters or press cancel.");
	{
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

}

generateBtn.addEventListener("click", writePassword);

// for (password !== null) {
// 	// Prompt user to input a letter
// 	letter = prompt("Type 'h' to honk, 'd' to drive to work, 'w' to drive around the world, or 't' to get a tuneup.");

// 	// If the letter is h, run the following functions/methods.
// 	if (letter === "h") {
// 	  car.honk();
// 	  reWriteStats();
// 	}
// 	// If the letter is d, run the following functions/methods.
// 	else if (letter === "d" && car.isWorking) {
// 	  car.driveToWork();
// 	  reWriteStats();
// 	}
// 	// If the letter is w, run the following functions/methods.
// 	else if (letter === "w" && car.isWorking) {
// 	  car.driveAroundWorld();
// 	  reWriteStats();
// 	}
// 	// If the letter is t, run the following functions/methods.
// 	else if (letter === "t") {
// 	  car.getTuneUp();
// 	  reWriteStats();
// 	}


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