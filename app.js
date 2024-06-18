/*
//Variables
let numeroSecreto = Math.floor(Math.random()*10)+1; 
let numeroUsuario = 0;
let intentos=1;
//let palabraVeces='vez';
let maximosIntentos= 3;


while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(typeof(numeroUsuario));

    if(numeroUsuario == numeroSecreto){
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en  ${intentos} ${intentos==1?'Vez':'Veces'}`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('el numero secreto es mayor');
        }
        //intentos = intentos+1;
        intentos++;
        
        palabraVeces='veces';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
        if(intentos > maximosIntentos){
            alert(`Llegaste al número maximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}
/*
/* DESAFIO */
/*HACER QUE EL CODIGO FUNCIONES CON LA CANTIDAD "n" QUE INGRESE EL USUARIO*/

//FORMA DE WILLIAM ANDRY
let numeroLimite=0;
numeroLimite = prompt("Ingresa al número maximo que deseas adivinar");

let intentosLimite=0;
intentosLimite = prompt("¿En cuantos intentos cres encontrarlo?");
alert(`Excelente!! tienes ${intentosLimite} intentos para encontrarlo`);

let numeroSecreto = Math.floor(Math.random()*numeroLimite)+1; 
let numeroUsuario = 0;
let intentos=1;

//let palabraVeces='vez';
let maximosIntentos= intentosLimite;
while(numeroUsuario != numeroSecreto){   
    
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroLimite} por favor:`));

    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(typeof(numeroUsuario));

    if(numeroUsuario == numeroSecreto){
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en  ${intentos} ${intentos==1?'Vez':'Veces'}`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('el numero secreto es mayor');
        }
        //intentos = intentos+1;
        intentos++;
        
        palabraVeces='veces';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
        if(intentos > maximosIntentos){
            alert(`Llegaste al número maximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}


