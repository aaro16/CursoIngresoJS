/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

dato1 =document.getElementById('numeroUno').value;

dato2 =document.getElementById('numeroDos').value;	

suma= parseInt(dato1) + parseInt(dato2);

alert("Total: " +suma);

}

function restar()
{
	
dato1 =document.getElementById('numeroUno').value;

dato2 =document.getElementById('numeroDos').value;	

resta= parseInt(dato1) - parseInt(dato2);

alert("Total: " +resta);		

}

function multiplicar()
{ 

dato1 =document.getElementById('numeroUno').value;

dato2 =document.getElementById('numeroDos').value;	

multi= parseInt(dato1) * parseInt(dato2);

alert("Total: " +multi);
	
}

function dividir()
{

dato1 =document.getElementById('numeroUno').value;

dato2 =document.getElementById('numeroDos').value;	

divi= parseInt(dato1) / parseInt(dato2);

alert("Total: " +divi)	;

}

