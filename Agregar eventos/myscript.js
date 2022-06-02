//Condiciones iniciales
let bikeArray = [];
let id_count = 1;

//Poniendo los event listener. Fijarse que el form2 es un botón, porque si no pisaría con el submit de form
let form1 = document.getElementById("bikeform");
form1.addEventListener("submit", enterBike);
let form2 = document.getElementById("deleteAll");
form2.addEventListener("click", deleteAllBikes);
let form3 = document.getElementById("selectdelete");
form3.addEventListener("submit", deleteBike);


function enterBike(e) {
    e.preventDefault();
    let form = e.target;
    let marca = getCleanInput(form.children[1].value, "marca", "string");
    let modelo = getCleanInput(form.children[3].value, "modelo", "string");
    let precio = getCleanInput(form.children[5].value, "precio", "number");
    if (marca == null || modelo == null || precio == null) { return };  //si alguno de estos inputs falla, cada uno dará una notificación, y al final en esta línea dará return vacío, es decir no se agrega nada al array
    bike = new Bici(marca, modelo, precio);
    bike.set_id(id_count);
    id_count++;
    bikeArray.push(bike);
    writeBikeList();
}


function deleteBike(e) {
    e.preventDefault();
    let selectDelete = e.target.children[1].value.trim();
    let found = bikeArray.findIndex((bike) => bike.id == selectDelete);
    if (found == -1) {
        alert("Debes ingresar un ID válido para borrar"); //Solo arroja error si el ID no es válido
    } else {
        bikeArray.splice(found, 1);
        writeBikeList();
    }
}

function deleteAllBikes() {
    bikeArray = [];
    writeBikeList();
}

function getCleanInput(input, prop, type) {  //Adaptado desde el desafío anterior. Parece que me quedaré con esta función hasta la entrega final
    if (input == null) {
        return;
    } else {
        input.trim();
    }
    condition = new Boolean
    if (type == "string") {
        condition = (input)
    } else if (type == "number") {
        condition = (input == parseFloat(input));
        input = parseFloat(input);
    }
    if (!condition) {
        alert("Debes ingresar valor válido de " + prop);
        return;
    } else {
        return input;
    }
}

//Esta función se referencia bastante por otras funciones
function writeBikeList() {
    for (const form of document.getElementsByTagName("form")) { form.reset() }   //Lo primero es reset todos los forms con un for of
    let paragraph = document.getElementsByTagName("ul")[0];   //El único ul en el html
    paragraph.textContent = ''; //Limpiando el ul
    paragraph.innerHTML = "Lista de bicis:"; //reseteando el título del ul
    if (bikeArray.length == 0) {
        let msg = document.createElement("li");
        msg.innerHTML = "(No hay bicicletas para mostrar)";  //Mensajito si no hay bicis
        paragraph.appendChild(msg);
    } else {
        bikeArray.forEach((bike) => {   //El viejo forEach de las bicis
            let listItem = document.createElement("li");
            listItem.innerHTML = bike.show();
            paragraph.appendChild(listItem);
        })
    }
}
