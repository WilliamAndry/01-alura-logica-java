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
