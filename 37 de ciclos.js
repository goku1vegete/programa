// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// supongo que se tiene un conjunto de calificacion de un grupo de 10 alumnos. REalizamos n Algoritmo 
// para calcular la calificacion promedio y la calificaion mas baja de todo el grupo
function ejercicio_3() {
	var calificacion_promedio = new Number();
	var calificacion_baja = new Number();
	var calificacion = new Number();
	var suma = new Number();
	var i = new Number();
	suma = 0;
	calificacion_baja = 99999;
	for (i=1;i<=10;i++) {
		document.write(i,". digite una calificacion:",'<BR/>');
		calificacion = Number(prompt());
		// suma iterativo de las calificacion
		suma = suma+calificacion;
		if (calificacion<calificacion_baja) {
			calificacion_baja = calificacion;
		}
	}
	calificacion_promedio = suma/10;
	document.write("la calificacion promedio es: ",calificacion_promedio,'<BR/>');
	document.write("la calificacion mas baja es:",calificacion_baja,'<BR/>');
}

