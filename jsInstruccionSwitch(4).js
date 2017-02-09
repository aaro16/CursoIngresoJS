function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño)
	{

	case"Febrero":
	alert("este mes tiene 28 dias");
	break;

	case"Abril":
	case"Junio":
	case"Septiembre":
	case"Noviembre":
	alert("este mes tiene 30 dias");
	break;

	default:
	alert("este mes tiene 31 dias")
	break;

	}
	
		/*puedo crear 2 conjuntos y poner "DEFAULT"
		al resto, y asi es mas corto.
		el "DEFAULT" siempre lleva ":"
		*/



}//FIN DE LA FUNCIÓN