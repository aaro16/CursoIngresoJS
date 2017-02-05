/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var dato1
	var total
	

dato1 = document.getElementById('importe').value;

total= 100- (parseInt(dato1) * 0.25) ;

document.getElementById('resultado').value = total ;


}
