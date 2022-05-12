alert("¡Adivina el número!")

let lower_bound = prompt("Ingresar cota menor."); //Pidiendo y limpiando la cota menor
while(true){
if (lower_bound == parseInt(lower_bound)) {
    alert("La cota menor es " + lower_bound + ".")
    lower_bound = parseInt(lower_bound)
    break;
}else{
    lower_bound = prompt("Ingrese número entero válido")}
}

let upper_bound = prompt("Ingresar cota mayor."); //Pidiendo y limpiando la cota mayor. Si es menor que la menor, no acepta
while(true){
if (upper_bound != parseInt(upper_bound)) {
    upper_bound = prompt("Ingrese número entero válido");
} else if (upper_bound <= lower_bound){
    upper_bound = prompt("Ingrese un número mayor a la cota menor.")
} else {
    alert("La cota mayor es " + upper_bound + ".");
    upper_bound = parseInt(upper_bound)
    break;
}
}

let n = Math.floor(Math.random() * (upper_bound - lower_bound)) + lower_bound; //Calculando el número a adivinar con un random

let tries = prompt("¿Cuántos intentos quieres?"); //Pidiendo y limpiando el número de intentos
while (true){
if (tries != parseInt(tries)) {
    tries = prompt("Ingresa un número entero válido.");
} else if (tries <= 0) {
    tries = prompt("Ingresa un número positivo.");
} else {
    break;
}
}

while (true){ //Empieza la adivinación
        if (tries == 1) {
            guess = prompt("¿Qué número entre " + lower_bound + " y " + upper_bound + "? ¡Último intento! Escribe \"esc\" para salir"); //último intento
        }else{
            guess = prompt("¿Qué número entre " + lower_bound + " y " + upper_bound + "? Te quedan " + tries + " intentos. Escribe \"esc\" para salir"); //si no es el último intento, se habla de los intentos en plural
        }
        if (guess == "esc"){
            alert("El número era " + n + ".") // si te rindes, te dice cuál era el número
            break;
        } else if (guess != parseInt(guess)) {
        alert("Ingresa un número válido."); //No acepta si es inválido, no quita intentos
    }else if ((guess > upper_bound) || (guess < lower_bound)){   //No acepta si está fuera del rango, no quita intentos
        alert("Ingresa un número dentro del rango.");
    } else if (guess != n){  //si es válido pero se equivoca, bajan los intentos
        tries -= 1;
        if (tries > 0){
            alert("¡Número equivocado!");
        }else{
            alert("¡Perdiste! el número era " + n + "."); //si llega a cero la cantidad de intentos, chao
            break;
        }
    } else {
        alert("¡Ganaste! El número era " + n + "."); //última posibilidad es que haya acertado
        break
    }
}

//Sé que abusé de los "break" y que en general es una mala práctica, pero quería ver si servía sin tener que usar keys