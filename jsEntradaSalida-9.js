/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

var tomarsueldo
var total

tomarsueldo = document.getElementById('sueldo').value ;


total = parseInt(tomarsueldo) * 1.1 ;

document.getElementById('resultado').value  = total; 



	
}
