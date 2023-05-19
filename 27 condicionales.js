// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Elabora un programa que me muestre los dias de la seman ingrese los siete primeros 
// numeros.
function manzana() {
	var num = new Number();
	document.write("digite un numero del dia de la semana (1-7):",'<BR/>');
	num = Number(prompt());
	switch (num) {
	case 1:
		document.write("lunes ",'<BR/>');
		break;
	case 2:
		document.write("martes ",'<BR/>');
		break;
	case 3:
		document.write("miercoles",'<BR/>');
		break;
	case 4:
		document.write("jueves  ",'<BR/>');
		break;
	case 5:
		document.write("viernes  ",'<BR/>');
		break;
	case 6:
		document.write("sabado ",'<BR/>');
		break;
	case 7:
		document.write("domingo ",'<BR/>');
		break;
	}
}

