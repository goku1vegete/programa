// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// hacer una programa para ingresar el radio de un circulo y se reporta su área y la longitud de la circuferencia.
// área = pi * radio
// longitud = 2 * pi * radio
function circulo() {
	var pi;
	var radio = new Number();
	var area = new Number();
	var lon = new Number();
	document.write("digite el valor del radio:",'<BR/>');
	radio = Number(prompt());
	area = Math.PI*radio*radio;
	lon = 2*Math.PI*radio;
	document.write("El area de la circuferencia es :",area,'<BR/>');
	document.write("la longitud es:",lon,'<BR/>');
}

