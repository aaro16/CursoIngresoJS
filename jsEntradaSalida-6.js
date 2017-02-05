/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

var dato1
var dato2
 var suma

dato1= document.getElementById('numeroUno').value ;
dato2= document.getElementById('numeroDos').value ;

suma = parseInt(dato1) + parseInt(dato2) ;

alert("La suma de ambos valores es: " +suma) ;



}

