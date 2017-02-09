function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño)
{
	
	case"Febrero":
	alert("Este mes no tiene mas de 29 dias");
	break;

	default:
	alert("este mes tiene 30 dias o mas dias");
	break;


/*el "DEFAULT" funciona como el "ELSE" de "IF"
por descarte el muestra el mensaje a las opciones
que no tengan un "CASE" asignado.*/


}	

	


}//FIN DE LA FUNCIÓN