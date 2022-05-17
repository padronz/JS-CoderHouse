alert("¡Adivina el número!")

function CleanInt(str) {    // Para conseguir un número entero limpio, usamos una recursive 
    let n = prompt(str);
    if (n == parseInt(n)){
        return parseInt(n);
    } else {
        alert("Ingrese número entero válido");
        return CleanInt(str);   //Recursive. Va a fallar hasta que por fin pongan un número válido
    }
}

let lower_bound = CleanInt("Ingresar cota menor.");
alert("La cota menor es " + lower_bound + ".");

let upper_bound = CleanInt("Ingresar cota mayor.");
while (upper_bound <= lower_bound){  //Asegurándose de que la cota mayor sea mayor. No es recursive sino un loop simple
alert("La cota mayor no puede ser menor que la cota menor.");
upper_bound = CleanInt("Ingresa cota mayor.");
}
alert("La cota mayor es " + upper_bound + ".");


let n = Math.floor(Math.random() * (upper_bound - lower_bound)) + lower_bound; //Calculando el número a adivinar con un random

let tries = CleanInt("¿Cuántos intentos quieres?");
while (tries <= 0){ //Asegurándose de que sea un número positivo con un loop
    alert("Ingresa un número entero positivo.");
    tries = CleanInt("¿Cuántos intentos quieres?")
}

while (tries > 0) { //Empieza la adivinación. No necesito keys, basta usar los 'tries'
        
        if (tries == 1) {
            guess = prompt("¿Qué número entre " + lower_bound + " y " + upper_bound + "? ¡Último intento! Escribe \"esc\" para salir"); //último intento
        }else{
            guess = prompt("¿Qué número entre " + lower_bound + " y " + upper_bound + "? Te quedan " + tries + " intentos. Escribe \"esc\" para salir"); //si no es el último intento, se habla de los intentos en plural
        }

        if (guess == "esc"){
            alert("Te rendiste. El número era " + n + ".") // si te rindes, te dice cuál era el número
            tries = 0;
       
        } else if (guess != parseInt(guess)) {
            alert("Ingresa un número entero válido."); //No acepta si es inválido, no quita intentos
        }else if ((guess > upper_bound) || (guess < lower_bound)){   //No acepta si está fuera del rango, no quita intentos
            alert("Ingresa un número dentro del rango.");
        
        } else if (guess != n){  //si es válido pero se equivoca, bajan los intentos
            tries -= 1;
            if (tries > 0){
                alert("¡Número equivocado!");
            }else{
                alert("¡Perdiste! el número era " + n + "."); //si llega a cero la cantidad de intentos, chao
                tries = 0;
            }
        
        } else { //última posibilidad es que haya acertado
            alert("¡Ganaste! El número era " + n + ".");
            tries = 0
    }
}

//Me deshice de los break, pero tampoco tuve que usar keys. Usé recursive, loop y tries