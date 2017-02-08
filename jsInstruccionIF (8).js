function Mostrar()
{
//tomo la edad  

var edad
var estado

edad=document.getElementById('edad').value;
edad=parseInt(edad);
estado=document.getElementById('estadoCivil').value;

	if (edad>17 && estado=="Soltero") 
	{
		alert("Es Soltero y no es menor");

	}



}//FIN DE LA FUNCIÓN