// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// calcular la siguiente sumatoria de los n elementos 
// s = 1 + 4 + 9.....
function ejercicio6() {
	var n_elemento = new Number();
	var i = new Number();
	var suma = new Number();
	document.write("digite la cantidad de elemento a sumarse:",'<BR/>');
	n_elemento = Number(prompt());
	i = 1;
	suma = 0;
	while (i<=n_elemento) {
		suma = suma+i;
		i = i+1;
	}
	document.write("la suma es:",suma,'<BR/>');
}

