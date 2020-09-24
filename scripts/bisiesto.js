const  anioField = document.querySelector('.anioField');
const  anioSubmit = document.querySelector('.anioSubmit');
const  resultadoAnio = document.querySelector('.resultadoAnio');


let anioIngresado= 0;



function es_bisiesto (esbisiesto,textoin,anioImg){
    resultadoAnio.innerHTML="<p>Ingresaste el año: "+textoin+" ...</p>"
    if (esbisiesto){

        if(anioImg==4){
            resultadoAnio.innerHTML +="<img src=\"images/anio4.png\">"
        }else{
            resultadoAnio.innerHTML +="<img src=\"images/anio3.png\">"
        }

        console.log("El año ingresado es un AÑO BISIESTO !")
    }else{
        if (anioImg==1){
            resultadoAnio.innerHTML +="<img src=\"images/anio1.png\">"
        }else{
            resultadoAnio.innerHTML +="<img src=\"images/anio2.png\">"
        }

        console.log("El año ingresado NO es un AÑO BISIESTO !")
    }
}


function checkAnio(){
    anioIngresado = parseInt(anioField.value);

    var esBisiesto= false;
    var anioImg = 1; /* Controlo que imagen mostrar*/
    if(anioIngresado %4 === 0){
        if(anioIngresado % 100 === 0){
            if(anioIngresado % 400 === 0){
                esBisiesto = true;
                anioImg=4
            }else{
                anioImg=2;
            }
        }else{
            esBisiesto = true;
            anioImg=3;
        }
    }

    es_bisiesto(esBisiesto,anioIngresado,anioImg)
   
    
}


anioSubmit.onclick = function(){

    resultadoAnio.innerHTML="";
    
    checkAnio();
    anioField.Value=""
    
}