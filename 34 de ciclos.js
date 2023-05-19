// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// (ciclo para--hasta -- hacer):
// calcular la suma de los "N" primeros numeros. 
// s=1+2+3+......N
function ejercicio() {
	var n = new Number();
	var suma = new Number();
	var i = new Number();
	document.write("digite la cantidad de numeros a sumarse:",'<BR/>');
	n = Number(prompt());
	suma = 0;
	for (i=1;i<=n;i++) {
		suma = suma+i;
	}
	document.write("la suma es:",suma,'<BR/>');
}

