// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// supongo que se tiene un conjunto de calificacion de un grupo de 10 alumnos. REalizamos n Algoritmo 
// calcular el factorial de un numero mayor o igual a 0
// N! = 1*2*3.........N*
function ejercicio_5() {
	var num = new Number();
	var i = new Number();
	var factorial = new Number();
	do {
		document.write("digite un numero",'<BR/>');
		num = Number(prompt());
	} while (num<0);
	i = 1;
	factorial = 1;
	// N! = 1 + 2 + 3......+N
	while (i<=num) {
		factorial = factorial+1;
		i = i+1;
	}
	document.write("El factorial es:",factorial,'<BR/>');
}

