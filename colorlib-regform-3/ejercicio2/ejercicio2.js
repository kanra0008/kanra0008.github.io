/*****************************************************
 *   
 *  EJERCICIO 2 JS  -  AUTOR: JOSÉ ANTONIO RÍOS GONZÁLEZ
 * 
 * Invoca desde una página html el código JS que te pida, mediante formulario, el radio de 
 * una circunferencia y te muestre en la propia página tres resultados:
 *   a. Longitud de la circunferencia que corresponde a ese radio
 *   b. Área del círculo 
 *   c. Volumen de la esfera
 * 
 ******************************************************/





document.getElementById('calcular').addEventListener("click",calcular);


function calcular(){

    let radio = Number(document.getElementById('radio').value);

   
    let circunferencia = 2 * radio * Math.PI;
    let circulo = radio ** 2 * Math.PI;
    let esfera = radio ** 3 * Math.PI;

    
   // Volcado por pantalla de resultados
    
    
       let nuevoNodo=document.createElement("li");
       //2º meter contenido en el nodo ose el resultado
       nuevoNodo.innerHTML = "La longitud de la circunferencia con radio"+radio+" es : "+circunferencia.toFixed(2);
       //3º enganchar el nodo en la lista padre 
       document.getElementById("resultados").appendChild(nuevoNodo);
    
       nuevoNodo=document.createElement("li");
       //2º meter contenido en el nodo ose el resultado
       nuevoNodo.innerHTML = "El área del círculo con radio"+radio+" es : "+circulo.toFixed(2);
       //3º enganchar el nodo en la lista padre 
       document.getElementById("resultados").appendChild(nuevoNodo);
       
       nuevoNodo=document.createElement("li");
       //2º meter contenido en el nodo ose el resultado
       nuevoNodo.innerHTML = "El volumen de la esfera con radio"+radio+" es : "+esfera.toFixed(2);
       //3º enganchar el nodo en la lista padre 
       document.getElementById("resultados").appendChild(nuevoNodo);

