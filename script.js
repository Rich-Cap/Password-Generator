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
		var lower = "abcdefghijklmnopqrstuvwxyz";
	} else lower = "";
	if (getUpper === true){
		var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	} else upper = "";
	if (getNumber === true){
		var numbers = "0123456789";
	} else numbers = "";
	if (getSymbol === true){
		var symbol = "!*+,-./:;<=>?{@_`|}~";
	} else symbol = "";

	function makeid(generate){
		var result           = "";
        var characters       = lower + upper + numbers + symbol;
        var charactersLength = characters.length;
        for ( var i = 0; i < generate; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
		return result;
	}
	
	var password = makeid(length);
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);