function Mostrar()
{
//tomo la edad  

var edad

edad=document.getElementById('edad').value;
edad=parseInt(edad);

if (edad>=18) 
{

	alert("Es mayor de Edad");
}


if (edad<=17 && edad>=13) 
{

	alert("Es Adolescente");
}



if (edad<=12) 
{

	alert("Es niño");
}	

/* tambien se puede hacer de esta manera

if(edad>17)
{
	alert("es mayor");
}

else
{
	if(edad<13)
	{
	alert("es niño");
	}
	else
	{
	alert("es adolescente");
	
	}
}

*/




}//FIN DE LA FUNCIÓN