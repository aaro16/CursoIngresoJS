/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre ;

	nombre = prompt("Ingrese su nombre") ;

document.getElementById('elNombre').value = nombre ;

/* para ejecutar el document.getElementById tengo q poner
el ID , siempre recordar poner el .value 
y convertir el document.getElementById en un variable o asignarlo
en una variable

*/
}

