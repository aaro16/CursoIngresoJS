function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert(mesDelAño);

switch(mesDelAño)
	{
		case"Enero":
		case"Febrero":
		case"Marzo":
		case"Abril":
		case"Mayo":
		case"Junio":
		alert("Falta para el invierno");
		break;

		case"Julio":
		case"Agosto":
		alert("Abrigate que hace frio");
		break;

		case"Septiembre":
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
		alert("Ya pasamos el frio, ahora calor");
		break;

/*se pueden unir varios CASE hasta que pongamos el BREAK
*/
	}



}//FIN DE LA FUNCIÓN