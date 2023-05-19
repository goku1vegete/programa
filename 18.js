// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// un profesor prepara tres cuestionario para una evaluacion final:
// A ,B y C.se sabe que se tardan 5 minutod en revisar el cuestionario A; 8 en revisar el cuestionario b y 6 en el c
// .La cantidad de exámenes de cada tipo se entran por teclado. ¿cuántas hora y cuántos minutos se tardan en revisar todas las evaluaciones?
function examenes() {
	var cantidada = new Number();
	var cantidadb = new Number();
	var cantidadc = new Number();
	var tiempoa = new Number();
	var tiempob = new Number();
	var tiempoc = new Number();
	var tiempo_total = new Number();
	var horas = new Number();
	var minutos = new Number();
	document.write(" digite la cantidad de cuestionarios A:",'<BR/>');
	cantidada = Number(prompt());
	document.write(" digite la cantidad de cuestionarios B:",'<BR/>');
	cantidadb = Number(prompt());
	document.write(" digite la cantidad de cuestionarios C:",'<BR/>');
	cantidadc = Number(prompt());
	// calcular los mismo que se tardara por cada cuestionario 
	tiempoa = cantidada*5;
	tiempob = cantidadb*8;
	tiempoc = cantidadc*6;
	// calculamos el tiempo total que le toma revisar todos los cuestionarios
	tiempo_total = tiempoa+tiempob+tiempoc;
	// calculamos las horas y minutos
	horas = Math.trunc(tiempo_total/60);
	minutos = tiempo_total%60;
	document.write("se tarda ",horas,"horas y",minutos,"minutos",'<BR/>');
}

