function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var	numero

while(contador<5)
{
	numero=prompt("Ingresar Numero");
	numero=parseInt(numero);
	acumulador=acumulador+numero;

	contador=contador+1;

}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN