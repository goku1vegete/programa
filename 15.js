// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// calcular la cantidad de segundo que están incluidos en el número de horas, minutos y segundos ingresados por el usuario.
function horas() {
	var hora = new Number();
	var minutos = new Number();
	var seg = new Number();
	var hora_seg = new Number();
	var minutos_seg = new Number();
	var total_seg = new Number();
	document.write("digite las horas:",'<BR/>');
	hora = Number(prompt());
	document.write("digite los minutos:",'<BR/>');
	minutos = Number(prompt());
	document.write("digite los segundos:",'<BR/>');
	seg = Number(prompt());
	// calcular el equivalente de segundo 
	hora_seg = hora*3600;
	minutos_seg = minutos*60;
	total_seg = hora_seg+minutos_seg+seg;
	document.write("los segundos equivalente son:",total_seg,'<BR/>');
}

