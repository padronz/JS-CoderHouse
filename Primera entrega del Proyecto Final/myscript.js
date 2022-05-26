alert("¡Bienvenido a mi tienda de bicis!");

let bikeArray = [];
let id_count = 1;

let intromsg = "Indique lo que desea hacer:\n1) Cargar nueva bici\n2) Eliminar bici\n3) Mostrar bicis en stock\nPresiona \"Cancelar\" para salir";

menu(intromsg);

function menu(intromsg) {
    let option = prompt(intromsg); 
    switch (option) {
        case "1":
            enterBike();
            return menu(intromsg);
        case "2":
            deleteBike();
            return menu(intromsg);
        case "3":
            showBikes();
            return menu(intromsg);
        case null:
            alert("¡Chao!");
            break;
        default:
            alert("Ingresa opción válida")
            return menu(intromsg);
    }
}


function enterBike() {
    let marca = getStringInput("marca");
    let modelo = getStringInput("modelo");
    let precio = getMoneyInput("precio");
    bike = new Bici(marca, modelo, precio);
    bike.id = id_count;
    id_count ++;
    bikeArray.push(bike);
    alert("Agregado: " + "\n" + bike.id + ". " + bike.marca + " " + bike.modelo + ": $" + bike.precio);
}

function deleteBike(){
    if (bikeArray.length == 0) {
        alert("No hay bicis para borrar");
    } else {
    let msg = "Cuál es el ID de la bici que quieres borrar?";
    bikeArray.forEach((bike) => msg += "\n" + bike.id + ". " + bike.marca + " " + bike.modelo + ": $" + bike.precio);
    let selectDelete = prompt(msg).trim();
    let found = bikeArray.findIndex((bike)=> bike.id == selectDelete);
    if (!found){
        alert("Debes ingresar un ID válido");
        return deleteBike();
    } else {
        alert("Se ha borrado la bicicleta:\n" + bikeArray[found].id + ". " + bikeArray[found].marca + " " + bikeArray[found].modelo + ": $" + bikeArray[found].precio);
        bikeArray.splice(found,1);
    }
}
}

function getStringInput(property) {
    let key = false;
    input = "";
    while (!key) {
        input = prompt("Ingrese " + property);
        if (input) {
            input = input.trim();
        } else {
            input = "";
        }
        if (input == "") {
            alert("Debe ingresar " + property);
        } else {
            key = true;
        }
    }
    return input;
}

function getMoneyInput(property) {
    let key = false;
    input = 0;
    while (!key) {
        input = prompt("Ingrese " + property);
        if (input) {
            input = input.trim();
        } else {
            input = "";
        }
        if (isNaN(input)) {
            alert("Debe ingresar " + property + " válido");
        } else {
            key = true;
        }
    }
    return input;
}

function showBikes(){
    if (bikeArray.length == 0) {
        alert("No hay bicis para mostrar");
    } else {
    let msg = "Bicicletas en stock:"
    bikeArray.forEach((bike) => msg += "\n" + bike.id + ". " + bike.marca + " " + bike.modelo + ": $" + bike.precio);
    alert(msg);
}
}