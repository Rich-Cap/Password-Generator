var generateBtn = document.querySelector("#generate");

function writePassword(){
	alert("Please select criteria to generate a password");
	var input = prompt("Type a number to choose length of password. Must be between 8 to 128 characters.");
	var getLower = confirm("Press 'ok' to include lowercase characters.");
	var getUpper = confirm("Press 'ok' to include UPPERCASE characters.");
	var getNumber = confirm("Press 'ok' to include Numbers.");
	var getSymbol = confirm("Press 'ok' to include Special characters.");

	
	if (input >= 8 && input <= 128){
		var length = parseInt(input);
	}else alert("Invalid answer. Try again!");
	
	if (getLower === true){
		var getLower = lower;
	}
	if (getUpper === true){
		var getUpper = upper;
	}
	if (getNumber === true){
		var getNumber = number;
	}
	if (getSymbol === true){
		var getSymbol = symbol;
	}

	function makeid(length){
		var result           = "";
        var lower            = "abcdefghijklmnopqrstuvwxyz";
        var upper            = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numbers          = "0123456789";
        var characters       = lower+upper+numbers;
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
	}
	
	var password = makeid(length);
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

//** Page elements functionality - Stopped to redirect purpose of HW assignment */

// var characterAmountNumber = document.getElementById("characterAmountNumber");
// var characterAmountRange = document.getElementById("characterAmountRange");

// characterAmountRange.addEventListener("input", syncCharacterAmount);
// characterAmountNumber.addEventListener("input", syncCharacterAmount);

// function syncCharacterAmount(i) {
// 	var value = i.target.value;
// 	characterAmountNumber.value = value;
// 	characterAmountRange.value = value;
// }
