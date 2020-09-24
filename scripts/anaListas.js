const  listaField = document.querySelector('.listaField');
const  listaSubmit = document.querySelector('.listaSubmit');
const  resultadoLista = document.querySelector('.resultadoLista');


let listaIngresado= "";



function mostrar_result (listaInicial,listaFinal){
    resultadoLista.innerHTML="<p class=\"listaI\">Lista Inicial: ["+listaInicial+"].</p>"
    resultadoLista.innerHTML +="<p class=\"listaF\">Lista Final: ["+listaFinal+" ].</p>"
    console.log("Lista Inicial: ",listaInicial);
    console.log("Lista Final: ",listaFinal)
}


function checkLista(){
    var listaIngresado = listaField.value.split(",");
    
    var my_list = listaIngresado.map(l=>parseInt(l));
    
    var lista_aux = my_list.slice();/*Hago una copia de la lista */
    
    for ( i = 0 ;i < my_list.length;i++){
        var cont =0;
        
        for (e =0;e < my_list.length;e++){
            
            if (my_list[i]===my_list[e]){
                cont +=1;
                
                
            }
        }
        if (cont ==1){
           
           lista_aux.splice(lista_aux.indexOf(my_list[i]),1);
        }
    }

   mostrar_result(my_list,lista_aux)
   
    
}


listaSubmit.onclick = function(){

    resultadoLista.innerHTML="";
    
    checkLista();
    listaField.Value=""
    
}