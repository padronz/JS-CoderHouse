//En este desafío agregué una sola función al final para modificar el HTML. También hice una pequeña mejora, en vez de escribir las propiedades de la bici a cada rato, simplemente uso el método show()

alert("¡Bienvenido a mi tienda de bicis!");

//Declarando lo básico y escribiendo el mensaje del prompt que se va a repetir varias veces
let bikeArray = [];
let id_count = 1;
let intromsg = "Indique lo que desea hacer:\n1) Cargar nueva bici\n2) Eliminar bici\n3) Mostrar bicis en stock\nPresiona \"Cancelar\" para salir Y MOSTRAR LISTA DE BICIS";

//Función menú que será llamada varias veces
menu(intromsg);

//Opciones de navegación. Si obtiene un null, es decir "cancelar", termina en break
function menu(intromsg) {
    let key = false;
    while (key == false) {
        let option = prompt(intromsg);
        switch (option) {
            case "1":
                enterBike();
                break;
            case "2":
                deleteBike();
                break;
            case "3":
                showBikes();
                break;
            case null:
                key = true;
                writeBikeList(); //Reemplazada la despedida con la nueva función descrita abajo
                break;
            default:
                alert("Ingresa opción válida");
                break;
        }
    }
}

//Utilizando el class/constructor, agregando la bici al array, subiendo el id. Si la marca, modelo, o precio reciben null, se cancela la transacción con el "return"
function enterBike() {
    let marca = getCleanInput("marca", "string");
    if (marca == null) { return };
    let modelo = getCleanInput("modelo", "string");
    if (modelo == null) { return };
    let precio = getCleanInput("precio", "money");
    if (precio == null) { return };
    bike = new Bici(marca, modelo, precio);
    bike.id = id_count;
    id_count++;
    bikeArray.push(bike);
    alert(bike.show()); //PEQUEÑA MEJORA:  utilizando el método show de las bicis
}

//Si no hay nada en el array, no muestra nada
function deleteBike() {
    if (bikeArray.length == 0) {
        alert("No hay bicis para borrar");
    } else {
        let msg = "Cuál es el ID de la bici que quieres borrar?";
        bikeArray.forEach((bike) => msg += "\n" + bike.show());
        let selectDelete = prompt(msg);
        //Esto para evitar hacerle un trim a un valor null. Si es null, se va con un return
        if (selectDelete == null) {
            return;
        } else {
            selectDelete.trim();
        }
        //Si no consigue nada el findIndex, arroja -1. Si es así, volver a la función deleteBike 
        let found = bikeArray.findIndex((bike) => bike.id == selectDelete);
        if (found == -1) {
            alert("Debes ingresar un ID válido");
            return deleteBike();
        } else {
            alert("Se ha borrado la bici:\n" + bikeArray[found].show()); //PEQUEÑA MEJORA:  utilizando el método show de las bicis
            bikeArray.splice(found, 1);
        }
    }
}

//Si no hay bicis, da error
function showBikes() {
    if (bikeArray.length == 0) {
        alert("No hay bicis para mostrar");
    } else {
        let msg = "Bicicletas en stock:"
        bikeArray.forEach((bike) => msg += "\n" + bike.show()); //PEQUEÑA MEJORA:  utilizando el método show de las bicis
        alert(msg);
    }
}

//Para conseguir input limpio de string o dinero. Doy ambas opciones en los argumentos. Si la condición falla, vuelve recursivamente a getCleanInput. Si el usuario cancela, le manda null a enterBike
function getCleanInput(prop, type) {
    let input = prompt("Ingrese " + prop);
    if (input == null) {
        return;
    } else {
        input.trim();
    }
    condition = new Boolean
    if (type == "string") {
        condition = (input)
    } else if (type == "money") {
        condition = (input == parseFloat(input));
        input = parseFloat(input);
    }
    if (!condition) {
        alert("Debe ingresar valor válido de " + prop);
        return getCleanInput(prop, type);
    } else {
        return input;
    }
}


function writeBikeList() { //Única función agregada en este desafío, escribir la lista de bicis
    let paragraph = document.getElementsByTagName("p")[1];
    paragraph.style.fontSize = '150%'; //en grande para que se vea
    let list = document.createElement("ul");
    if (bikeArray.length == 0) {
        paragraph.innerHTML = "No hay bicis para mostrar.";
    } else {
        paragraph.innerHTML = "Lista de bicis:"
        bikeArray.forEach((bike) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = bike.show();
            list.appendChild(listItem);
        })
    }
    document.getElementsByTagName("p")[1].appendChild(list); //busca el segundo item que sea tag p, y luego append
}
