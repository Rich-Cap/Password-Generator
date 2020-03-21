var generateBtn = document.querySelector("#generate");

function writePassword(){
	alert("Please select criteria to generate a password");
	var getLength = prompt("Type a number to choose length of password. Must be between 8 to 128 characters.");
	var getLower = confirm("Press 'ok' to include lowercase or press cancel.");
	var getUpper = confirm("Press 'ok' to include UPPERCASE or press cancel.");
	var getNumber = confirm("Press 'ok' to include Numbers or press cancel.");
	var getSymbol = confirm("Press 'ok' to include Special Characters or press cancel.");

	
	if (getLength >= 8 && getLength <= 128){
		length = getLength;
	}
	if (getLower === true){
		getLower = lower;
	}
	if (getUpper === true){
		getUpper = upper;
	}
	if (getNumber === true){
		getNumber = number;
	}
	if (getSymbol === true){
		getSymbol = symbol;
	}

	function generatePassword(length){
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
	
	var password = generatePassword(length);
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

//** Functions for Options that should be less complicated */

// function writePassword(){
//     var input = prompt("What number?");
//     var length = parseInt(input);
//     function makeid(length) {
//         var result           = "";
//         var lower            = "abcdefghijklmnopqrstuvwxyz";
//         var upper            = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         var numbers          = "0123456789";
//         var characters       = lower+upper+numbers;
//         var charactersLength = characters.length;
//         for ( var i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         }
//         return result;
// }
// var password = makeid(length);
// var passwordText = document.querySelector("#password");
// passwordText.value = password;
// }






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