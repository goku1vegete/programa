// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Dada las horas trabajadas de 5 persona y la tarifa de pago calcular el salaio y la sumatoria de tdos lo salario 
function ejercio8() {
	var x = new Number();
	var hora = new Number();
	var pago = new Number();
	var total = new Number();
	var sueldo = new Number();
	document.write("1.ingresa el pago tacaño:",'<BR/>');
	pago = Number(prompt());
	x = 1;
	total = 0;
	sueldo = 0;
	while (x<=5) {
		document.write("2.ingrese las hora trabajadas:",'<BR/>');
		hora = Number(prompt());
		total = total+hora;
		sueldo = sueldo+(hora*pago);
		x = x+1;
	}
	document.write("la suma que tiene que pagar es:",total,"horas es:",sueldo,'<BR/>');
}

