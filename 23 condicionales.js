// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// En un almacén se hace un 20% de descuento s los clientes cuya compra supere los $100. ¡cuál será la cantidad que pagará una persona por su compra 
// (diagrama n-s)
function ejercicio() {
	var compra = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("digite la cantidad a pagar :",'<BR/>');
	compra = Number(prompt());
	if (compra>100) {
		descuento = compra*0.2;
	} else {
		descuento = 0;
	}
	precio_final = compra-descuento;
	document.write("El precio a pagar es:",precio_final,'<BR/>');
}

