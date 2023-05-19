// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// leer tres numero diferentes e imprimir el numero mayor de los 
// 1<2<3
function ejercicio() {
	var a = new Number();
	var b = new Number();
	var c = new Number();
	document.write("digite tres numeros:",'<BR/>');
	a = Number(prompt());
	b = Number(prompt());
	c = Number(prompt());
	a = 1;
	b = 2;
	c = 3;
	if (a>b && a>c) {
		// El numero mayor seria 
		document.write("el numero mayor es:",a,'<BR/>');
	} else {
		if (b>a && b>c) {
			document.write("el numero mayores:",b,'<BR/>');
		} else {
			document.write("el numero mayor es:",c,'<BR/>');
		}
	}
}

