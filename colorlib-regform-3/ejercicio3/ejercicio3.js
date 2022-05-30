/*****************************************************
 *   
 *  EJERCICIO 3 JS  -  AUTOR: JOSÉ ANTONIO RÍOS GONZÁLEZ
 * 
 * Invoca desde una página html el código JS que te pida, mediante formulario, los tres lados 
 * de un triángulo y te devuelva como resultado si éste es equilátero, isósceles o escaleno.
 * El formulario deberá tener un estilo adecuado, y no admitir que ningún lado esté vacío o no
 * sea numérico.
 * 
 ******************************************************/





document.getElementById('compara').addEventListener("click",comparar);
function comparar(){


let lado1 =Number(document.getElementById('lado1').value);
let lado2 =Number(document.getElementById('lado2').value);
let lado3 =Number(document.getElementById('lado3').value);

let respuesta="";


   
   
   
if ( lado1==lado2 && lado2==lado3 ) {
   respuesta = "es equilátero";
} else {
  if (lado1==lado2 || lado2==lado3 || lado3==lado1) {
      respuesta = "es isósceles";
  } else {
      respuesta = "es escaleno";
  }
}


   
   
document.getElementById('resultadoTipo').innerHTML="El triángulo "+respuesta;

}



function changeColor(x)
{
    if(x.style.background=="rgb(247, 211, 88)")
    {
        x.style.background="#fff";
    }else{
        x.style.background="#F7D358";
    }
    return false;
}

