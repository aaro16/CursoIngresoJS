function Mostrar()
{

/*
se ingresara los datos de los alumnos del 
curso de ingreso, a partir de estos 
datos deberemos informar lo siguiente: 

1. la mejor nota
2. promedio de notas
3. saber la cantidad de mujeres aprobadas
mayores a 25 años
4. el sexo y el nombre de la ultima persona que se saco 10
5. la cantidad de hombres desaprobados
6. la cantidad de mujeres aprobadas
7. el promedio de nota de las mujeres
8. el promedio de nota de los hombres mayores a 30
9. que sexo desaprobo mas
10. cuantas personas menores a 30 años desaprobaron el examen

los datos de los alumnos son:
nombre   edad   nota   sexo
*/
	
	var menoresde30=0;
	var contadorHombres=0;
	var sumaNotasHombres=0;
	var promedioNotaHombres=0;
	var sumaNotasMujeres=0;
	var contadorMujeres=0;
	var promedioNotaMujeres=0;
	var mujeresAprobadas=0;
	var hombresDesaprobados=0;
	var promedioNotas=0;
	var sumaNotas=0;
	var contador=0;
	var nombre;
	var edad;
	var nota=0;
	var sexo;
	var respuesta=true;
	var notaMaxima=0;
	var mujeresde25aprobadas=0;

	while(respuesta==true)
	{

		nombre=prompt("Ingrese nombre");

		edad=prompt("ingrese edad");
		edad=parseInt(edad);

			while(edad<0 || edad>90)
			{
				edad=prompt("ingrese edad");
				edad=parseInt(edad);
			}

		nota=prompt("ingrese nota");
		nota=parseInt(nota);

			while(nota<0 || nota>10)
			{
				nota=prompt("ingrese nota");
				nota=parseInt(nota);
			}

		sexo=prompt("ingrese sexo");

			while(sexo!="m" && sexo!="f")
			{
				sexo=prompt("ingrese sexo");
			}

			if(sexo=="f" && edad>25)
			{
				if(nota>3)
				{
				mujeresde25aprobadas++
				}
			}

			if(nota>notaMaxima)
			{
				notaMaxima=nota;
			}

			if(nota==10)
			{
				Ultimo10nombre=nombre
				Ultimo10sexo=sexo

			}

			if(sexo=="m" && nota<4)
			{
				hombresDesaprobados++;
			}
			
			if(sexo=="f" && nota>3)
			{
				mujeresAprobadas++
			}

			if(sexo=="f")
			{
				contadorMujeres++;
				sumaNotasMujeres=nota
				promedioNotaMujeres=(sumaNotasMujeres/contadorMujeres);
					
			}

			if(sexo=="m" && edad>30)
			{
				contadorHombres++;
				sumaNotasHombres=nota
				promedioNotaHombres=(sumaNotasHombres/contadorHombres);
					
			}

			
			if(edad<30 && nota<3)
			{
				
				menoresde30++

			}

			mujeresdesaprobadas!=(mujeresAprobadas);
			PeorSexo=hombresDesaprobados;


		contador++;

		respuesta=confirm("¿Desea ingresar otros datos?");
	}

	promedioNotas=(sumaNotas/contador);

	alert("1. nota maxima" +notaMaxima+ "2. promedio Notas"+promedioNotas+ "3.mujeres de 25 aprobadas"+mujeresde25aprobadas+
		"4. ultima persona que saco 10"+Ultimo10nombre+ +Ultimo10sexo+ "5.hombres desaprobados"+hombresDesaprobados+
		"6.mujeres aprobadas"+mujeresAprobadas+ "7."+promedioNotaMujeres+ "8.promedio nota de hombres "+promedioNotaHombres+
		"9.que sexo desaprobo mas"++ "10.cuantos menores a 30 desaprobaron" +menoresde30+);

}//FIN DE LA FUNCIÓN