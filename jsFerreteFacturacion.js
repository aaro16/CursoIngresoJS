/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

dato1= document.getElementById('PrecioUno').value ;
dato2= document.getElementById('PrecioDos').value;
dato3= document.getElementById('PrecioTres').value ;

suma= parseInt(dato1)+parseInt(dato2)+parseInt(dato3) ;

alert("La suma de los productos es $ " +suma) ;

}
function Promedio () 
{

dato1= document.getElementById('PrecioUno').value ;
dato2= document.getElementById('PrecioDos').value;
dato3= document.getElementById('PrecioTres').value ;

promedio= (parseInt(dato1)+parseInt(dato2)+parseInt(dato3) ) / 3 ;

alert("EL promedio en precio de los productos es $ " +promedio) ;

	
}
function PrecioFinal () 
{

dato1= document.getElementById('PrecioUno').value ;
dato2= document.getElementById('PrecioDos').value;
dato3= document.getElementById('PrecioTres').value ;

preciototal= (parseInt(dato1)+parseInt(dato2)+parseInt(dato3) ) *1.21 ;

alert("El precio total de productos mas IVA es: $ " +preciototal) ;

	
}