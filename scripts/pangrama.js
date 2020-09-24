const  textoField = document.querySelector('.textoField');
const  textoSubmit = document.querySelector('.textoSubmit');
const  resultado = document.querySelector('.resultado');

const abecedario = "abcdefghijklmnñopqrstuvwxyz"
let textoIngresado= "";



function es_pangrama (contador,text){
    if (contador === abecedario.length){
        resultado.innerHTML="<img src=\"images/espenta.png\">"
        console.log("El texto ingresado ES un PANGRAMA")
    }else{
        resultado.innerHTML="<img src=\"images/noespenta.png\">"
        console.log("El texto ingresado NO es un PANGRAMA")
    }
}


function checkTexto(){
    textoIngresado =textoField.value;
    textAuxiliar = textoIngresado.toLowerCase();
    var contador = 0;
    for(i = 0 ; i < abecedario.length;i++){
        if (textAuxiliar.includes(abecedario[i])){
                contador +=1;
                console.log(abecedario[i]);
        }else{
            console.log('pa afuera');
            break;
        }
        
    }

    es_pangrama(contador,textoIngresado);
    
}


textoSubmit.onclick = function(){

    resultado.innerHTML="";
    
    checkTexto();
    textoField.Value=""
    
}