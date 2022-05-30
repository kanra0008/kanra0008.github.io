/*****************************************************
 *   
 *  EJERCICIO 6 JS  -  AUTOR: JOSÉ ANTONIO RÍOS GONZÁLEZ
 * 
 * Detecta Cadena de caracteres, 
 * y te dice si es palindromo o no.
 * 
 ******************************************************/
 






document.getElementById('palindromo').addEventListener("click",esPalindromo);


function esPalindromo() {
    let cadena = document.getElementById('caracteres').value;
    let numchar = cadena.length;

	
	cadena = cadena.toLowerCase();
	  var car;
	  var cadena_espac = "";
	  var cadena_reves = "";

    	for (i = 0; i < numchar; i++) {
		car = cadena.charAt(i);

		if (car != " ") {
			cadena_espac += car;
			cadena_reves = car + cadena_reves;
		}
	}
	
    	if (cadena_espac == cadena_reves) {
          
		document.getElementById("resultadoPalindromo").innerHTML = "La palabra <strong> SI es Palindromo</strong>";
        
   	 }
    	
	else {
   		 document.getElementById("resultadoPalindromo").innerHTML = ( "La palabra <strong> No es Palindromo</strong>");
        
	}
}
 

