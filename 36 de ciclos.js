// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Leer 10 numeros e imprimir cuantos son positivo y negativo y cuantos neutros 
function ejercicio_3() {
	var num = new Number();
	var i = new Number();
	var conteo_positivo = new Number();
	var conteo_negativo = new Number();
	var conteo_neutro = new Number();
	conteo_positivo = 0;
	conteo_negativo = 0;
	conteo_neutro = 0;
	for (i=1;i<=10;i++) {
		document.write("digite un numro:",'<BR/>');
		num = Number(prompt());
		if (num==0) {
			conteo_neutro = conteo_neutro+1;
		} else {
			if (num>0) {
				conteo_positivo = conteo_positivo+1;
			} else {
				conteo_negativo = conteo_negativo+1;
			}
		}
	}
	document.write("la cnatidad de positivos es:",conteo_negativo,'<BR/>');
	document.write("la cantidad de negativos es:",conteo_negativo,'<BR/>');
	document.write("la cantidad de neutro es:",conteo_neutro,'<BR/>');
}

