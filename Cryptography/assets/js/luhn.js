const ccNum = () => document.getElementById("ccNumber").value;
const submit = document.getElementById("ccValidate");
submit.addEventListener("click", function(e){
  e.preventDefault();
   document.getElementById("ccValidation").innerHTML = cardType();
}, false);
const Validate = () => {
	let value = ccNum().trim();
	if (/[^0-9-\s]+/.test(value)) return false;

	// Luhn Algorithm to validate whether the card number is valid
	let checkNumber = 0, even = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (even && (nDigit *= 2) > 9) nDigit -= 9;

		checkNumber += nDigit;
		even = !even;
	}
	return (checkNumber % 10) == 0;
}
//Check type of card
const cardType = () => {
   let value = ccNum().replace(/\D/g, "");
   let validateResult = "Please enter a number";

   let RegObjects = {
      "Valid Credit Card Number (Visa)": /^(?:4[0-9]{12}(?:[0-9]{3})?)$/g,
      "Valid Credit Card Number (Master Card)": /^5[1-5][0-9]{14}$/g,
      "Valid Credit Card Number (AmericanExpress)": /3[47][0-9]{13}$/g,
	  "Valid Credit Card Number (Discover)": /3[47][0-9]{13}$/g,
   };
	
   if(Validate() === false){
      validateResult = "Invalid Card Number!"
      return validateResult;
   } else {
	   Object.keys(RegObjects).forEach( p => {
		  if(RegObjects[p].test(value)) {
			 validateResult = p;
		  }
	   });
	   return validateResult;
   }
}