/*****************************************************
 *   
 *  EJERCICIO 5 JS  -  AUTOR: JOSÉ ANTONIO RÍOS GONZÁLEZ
 * 
 * Detecta Cadena de caracteres, 
 * es mayúsculas o minúsculas. 
 * 
 ******************************************************/
 




document.getElementById('mayusculaMinuscula').addEventListener("click",mayMin);
function mayMin() {

    
    let cadena = document.getElementById('cadena').value;//cadena original
    let resultado ="" ; //"La cadena \""+resultado+"\" "
    

    

        if(cadena === cadena.toUpperCase()) {
           resultado += " en mayúsculas";
         }
         else if(cadena === cadena.toLowerCase()) {
           resultado += " en minúsculas";
         }
         else {
           resultado += " en mayúsculas y minúsculas";
         }
  
           return document.getElementById('resultado').innerHTML = "La Cadena esta escrita : "+resultado;
    
        }
  

