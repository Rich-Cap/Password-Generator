var generateBtn = document.querySelector("#generate");



function writePassword(){
	alert("Please select criteria to generate a password");
	var length = prompt("Type a number to choose length of password. Must be between 8 to 128 characters.");
		if (length >= 8){
			prompt("Type 'yes' to include UPPERCASE or press cancel.");
		}
	var randomLower = prompt("Type 'yes' to include lowercase or press cancel.");
	var upper = prompt("Type 'yes' to include UPPERCASE or press cancel.");
	var number = prompt("Type 'yes' to include Numbers or press cancel.");
	var symbol = prompt("Type 'yes' to include Special Characters or press cancel.");
	{
	
	
	
		var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
	}

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