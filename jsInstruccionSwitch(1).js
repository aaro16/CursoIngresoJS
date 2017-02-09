function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch(mesDelAño)
{

	case"Enero":
	
		alert("que comiences bien el año");
		break;
	
	case"Marzo":
	
		alert("A clases!!!");
		break;
		
	case"Julio":
	
		alert("Se vienen las vacaiones!!");
		break;
	
	case"Diciembre":
		
		alert("felices fiestas");
		break;
		
}

/*no es necesario que los CASE tengan "{" 
los CASE terminan en ":" , no en ";"
siempre tengo que poner el "break" al final del CASE
  */


} //FIN DE LA FUNCIÓN