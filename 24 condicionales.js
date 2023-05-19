// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// leer 2 números, si son iguales que los multiplique , si el primero es mayor que el segundo que los reste
// y si no que los sume 
function ejercicio() {
	var num1 = new Number();
	var num2 = new Number();
	var resultado = new Number();
	document.write("digite dos numeros o los mato:",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	if (num1==num2) {
		// si son iguales multiplicamos 
		resultado = num1*num2;
	} else {
		if (num1>num2) {
			// que lo reste 
			resultado = num1-num2;
		} else {
			// que lo sume 
			resultado = num1+num2;
		}
	}
	document.write("Sus operacion:",resultado,'<BR/>');
}

