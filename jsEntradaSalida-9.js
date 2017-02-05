/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

var sueldo
var valorsueldo
var total

sueldo= document.getElementById('sueldo').value ;

valorsueldo= parseInt(sueldo) ;

total= valorsueldo * 1.10 ;

document.getElementById('resultado').value = total ;


}
