function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var numeroRandom = Math.floor((Math.random() * 10) + 1);

if(numeroRandom>8)

{ 
	alert("Excelente " +numeroRandom);
}

if(numeroRandom>3 && numeroRandom<9 )
{
	alert("Aprobo " +numeroRandom);
}

if (numeroRandom<4) 
{
	alert("Vamos, la proxima se puede " +numeroRandom);
}

/*
mientras se utilicen menos if es programa andara mas rapido.
siempre hacer un test, modificando la variable
*/

}//FIN DE LA FUNCIÓN