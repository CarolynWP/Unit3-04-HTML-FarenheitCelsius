//script
'use script'

//function
function calculate() {
	//variable
	let fahren = parseFloat(document.getElementById("fahren").value);

	//calculation
	let celsius = 5/9*(fahren-32)

	//output
	document.getElementById("answer").innerHTML = "The temperature in Celsius would be " + celsius.toFixed(2) + "°."
}