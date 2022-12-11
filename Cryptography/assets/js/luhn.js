const creditcardinput = () => document.getElementById("ccNumber").value;

const Doccheck = document.getElementById("creditcardsubmit");
Doccheck.addEventListener("click", function(e){
  e.preventDefault();
   document.getElementById("ccValidation").innerHTML = TypeOfCardCheck();
}, false);
const Validate = () => {
	let value = creditcardinput().trim();
	if (/[^0-9-\s]+/.test(value)) return false;

	// The Luhn Algorithm
	let nCheck = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

		nCheck += nDigit;
		bEven = !bEven;
	}
	return (nCheck % 10) == 0;
}

const TypeOfCardCheck = () => {
   let value = creditcardinput().replace(/\D/g, "");
   let validCheck = Validate();
   let cardName = "Unknown card Number";

   let RegObjects = {
      "Valid Credit Card Number (Visa)": /^(?:4[0-9]{12}(?:[0-9]{3})?)$/g,
      "Valid Credit Card Number (Master Card)": /^5[1-5][0-9]{14}$/g,
      "Valid Credit Card Number (AmericanExpress)": /3[47][0-9]{13}$/g,
	  "Valid Credit Card Number (Discover)": /3[47][0-9]{13}$/g,
   };
	
	// validates and outputs the card type
   if(Validate() === false){
      cardName = "Invalid Card Number!"
      return cardName;
   } else {
	   Object.keys(RegObjects).forEach( p => {
		  if(RegObjects[p].test(value)) {
			 cardName = p;
		  }
	   });
	   return cardName;
   }
}