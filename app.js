//Variables
let numeroSecreto = 4; 
let numeroUsuario = 0;
let intentos=1;
let palabraVeces='vez';

while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if(numeroUsuario == numeroSecreto){
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en  ${intentos} ${palabraVeces}`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('el numero secreto es mayor');
        }
        intentos = intentos+1;
        palabraVeces='veces';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}