//Variables
let numeroSecreto = 8; 
let numeroUsuario = prompt("Me indicas un número por favor:");

console.log(numeroUsuario);

/*Este código realiza
la comparación */

if(numeroUsuario == numeroSecreto){
    //Acertamos, fue verdadera la condicion
    alert(`Acertaste, el número es: ${numeroUsuario}`);
}else{
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}