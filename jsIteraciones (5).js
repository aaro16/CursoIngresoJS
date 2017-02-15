function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while((sexo!=="M"  && sexo!=="F") && (sexo!=="m"  && sexo!=="f"))
{
	sexo=prompt("Error, ingrese f ó m .");
}


document.getElementById('Sexo').value=sexo;

/*hice una doble union porque si ponia la F o M en 
minuscula, no me la tomaba*/

}//FIN DE LA FUNCIÓN