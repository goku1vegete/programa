// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// elaborar un programa que me muestre el significado de aniversario de cada decada hasta los 60
function manzana() {
	var decada = new Number();
	document.write("digite una decada :",'<BR/>');
	decada = Number(prompt());
	switch (decada) {
	case 10:
		document.write("bodas de hojalata",'<BR/>');
		break;
	case 20:
		document.write("bodas de Porcelena ",'<BR/>');
		break;
	case 30:
		document.write("bodas de Perlas",'<BR/>');
		break;
	case 40:
		document.write("bodas de Rubi",'<BR/>');
		break;
	case 50:
		document.write("bodas de Oro ",'<BR/>');
		break;
	case 60:
		document.write("bodas de Diamante ",'<BR/>');
		break;
	default:
		document.write("error solo tiene que ingresar los numero de indicado:",'<BR/>');
	}
}

