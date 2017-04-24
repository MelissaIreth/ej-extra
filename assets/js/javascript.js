function convertirCelsius(){
	var convertir = document.getElementById("fahrenheit").value;
	var t = convertir*9/5+32;
	var fin = document.getElementById("salida").value = t;
	}