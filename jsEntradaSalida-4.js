/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	
	var minombre = prompt("mi nombre") ;
	document.getElementById('elNombre').value = minombre ;

/* con: document.getElementById , puedo tomar o 
mostrar datos a diferencia del alert o prompt

*/
}

