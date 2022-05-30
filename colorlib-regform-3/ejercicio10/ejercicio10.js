/*****************************************************
 *   
 *  EJERCICIO 10 JS  -  AUTOR: JOSÉ ANTONIO RÍOS GONZÁLEZ
 * 
 *  JSON para almacenar los
 *  nombres en español y en inglés, y en el select 
 *  deberá aparecer para elegir, un mes en
 *  español, y mostrará su traducción al inglés
 * 
 ******************************************************/



 document.getElementById('traducir').addEventListener("click",TraducirNombre);

 function TraducirNombre(){

    const meses = {"Enero":"January",
                    "Febrero":"February",
                    "Marzo":"March",
                    "Abril":"April",
                    "Mayo":"May",
                    "Junio":"Juny",
                    "Julio":"July",
                    "Agosto":"August",
                    "Septiembre":"September",
                    "Octubre":"October",
                    "Noviembre":"November",
                    "Diciembre":"December"}
    

    let mes = document.getElementById("mes").value;

 

    let respuesta = (mes == "error")? "no has elegido mes. ": meses[mes];//hay que poner la variable
  
    

    document.getElementById("nombreMes").innerHTML=respuesta;
}
