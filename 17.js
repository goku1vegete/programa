// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// un maestro desea saber que porcentaje de hombres y que porcentaje de mujeres hay en un grupo de estudiantes 
function estudiantes() {
	var num_hombres = new Number();
	var num_mujeres = new Number();
	var total_estudiantes = new Number();
	var porcentajeh = new Number();
	var porcentajem = new Number();
	document.write("digito el numero de hombres ",'<BR/>');
	num_hombres = Number(prompt());
	document.write("digito el numero de mujeres ",'<BR/>');
	num_mujeres = Number(prompt());
	total_estudiantes = num_hombres+num_mujeres;
	porcentajeh = num_hombres/total_estudiantes*100;
	porcentajem = num_mujeres/total_estudiantes*100;
	document.write("el porcentaje de hombre:",porcentajeh,"%",'<BR/>');
	document.write("el porcentaje de mujeres:",porcentajem,"%",'<BR/>');
}

