const  romanoField = document.querySelector('.romanoField');
const  romanoSubmit = document.querySelector('.romanoSubmit');
const  resultadoRomano = document.querySelector('.resultadoRomano');

let numeroIngresado=0;

const   decimal = [1, 5, 10, 50, 100, 500, 1000];
const	romanos = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];


function mostrar_numero (decimal,romano){
    resultadoRomano.innerHTML="<p class=\"numI\">Numero Decimal: "+decimal+".</p>"
    resultadoRomano.innerHTML +="<p class=\"romano\">Numero Romano: "+romano+".</p>"
    console.log("Numero Decimal: ",decimal);
    console.log("Numero Romano: ",romano)
    
}


function romanNumerals(n) {

	var numeroIngr = n;
	var	res = [], num, letra, val, posicion, insert

	for(var i = 6; num = decimal[i], letra = romanos[i]; i--) {
		
		if(n >= num) {
			
			var r = Math.floor(n / num); 

		
			n -= r * num; 

			if(r < 4){
				/*Metemos los num romanos */
				while(r--){
					res.push(letra);
				}
			} else {
				
				val = res.pop(); // Última letra

				posicion = (val ? romanos.indexOf(val) : i) + 1; 

				/* si letra == "M" romanos[pos] no existirá y usamos M*/
				insert = letra + (romanos[posicion] || 'M'); 

				/* Insertamos string */
				res.push(insert);
			}
		} else {
			/* Si no vamos a poner letra usamos un para que no afecte pop.*/
			res.push('');
		}
	}
     
	mostrar_numero(numeroIngr,res.join(''));
}




romanoSubmit.onclick = function(){

    resultadoRomano.innerHTML="";
    numeroIngresado=parseInt(romanoField.value);
    romanNumerals(numeroIngresado);
    
    romanoField.Value=""
    
}

