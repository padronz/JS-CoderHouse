alert("¡Haz el arreglo que quieras!");

//Hago el mensaje iterativamente para que el código se vea más bonito
let myArray = [];
let text = "";
text += "Escribe \"show\" para mostrar arreglo";
text += "\nEscribe \"in\" para introducir elemento";
text += "\nEscribe \"del\" para borrar elemento";
text += "\nEscribe \"rnd\" para mostrar un elemento aleatorio";
text += "\nPresiona \"Cancelar\" para salir.";

//Llamando la función que declararé después
getInput(text);

//Haciendo cada caso, terminando de forma recursiva para que siga el ciclo dentro del switch. Hay que poner "return"; si no, no terminan los ciclos correctamente. 
function getInput(text) {
    switch (prompt(text)) {
        case "show":
            //Si el array tiene length 0, está vacío. Muestra error
            if (myArray.length == 0) {
                alert("Arreglo vacío.");
                //Si está todo bien, carga iterativamente el notif con un forEach y luego lo muestra
            } else {
                let notif = "";
                myArray.forEach((el, index) => { notif += "\n" + index + ". " + el });
                alert(notif);
            }
            return getInput(text);
        case "in":
            //Push sencillo. Pero si no introduce nada, te notifica
            let newItem = prompt("Introducir elemento.");
            if (newItem != null) {
                myArray.push(newItem);
                alert("Agregado elemento " + (myArray.length - 1) + ". " + newItem);
            }
            return getInput(text);
        case "del":
            //borrar con splice, asegurándose de poner el segundo argumento quantity como 1, para no borrar más de un elemento
            if (myArray.length == 0) {
                alert("Arreglo vacío.");
            } else {
		let textdel = "¿Cuál es el indice del elemento que quieres borrar?"
		myArray.forEach((el, index) => { textdel += "\n" + index + ". " + el });
                let index = prompt(textdel);
                if (index != null)
                    //Si el índice no es válido, borrar el elemento
                    if (myArray[index] != undefined) {
                        let aux = myArray[index];
                        myArray.splice(index, 1);
                        alert("Has borrado el elemento " + index + ". " + aux);
                    } else {
                        alert("Ingresa un índice válido.");
                    }
            }
            return getInput(text);
        case "rnd":
            //Randomizer. rndx significa random index
            if (myArray.length > 0) {
                let rndx = Math.floor(Math.random() * myArray.length);
                alert("Aleatorio: " + rndx + ". " + myArray[rndx]);
            } else {
                alert("Arreglo vacío.");
            }
            return getInput(text);
        case null:
            //Chao! con break
            alert("¡Adiós!");
            break;
        default:
            //Si no ingresa nada o es inválido, mensaje de error
            alert("Ingresa una opción válida.")
            return getInput(text);
    }
}