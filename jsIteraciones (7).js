function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;
	var numero ;

while(respuesta==true)

{
	numero=prompt("Ingrese Numero");
	numero=parseInt(numero);
	acumulador=acumulador+numero;
	contador=contador+1;
	
	respuesta=confirm("¿Desea Ingresar otro Numero?");

}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;


/* tambien lo puedo hacer de esta manera
respuesta=prompt("¿Ingresar otro numero? si/no");*/


}//FIN DE LA FUNCIÓN