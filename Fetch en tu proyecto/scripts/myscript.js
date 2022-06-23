let bikeArray = [];
let bikeCount = 0

let form1 = document.getElementById("bikeform");
form1.addEventListener("submit", enterBike);
let form2 = document.getElementById("deleteAll");
form2.addEventListener("click", deleteAllBikes);
let form3 = document.getElementById("selectdelete");
form3.addEventListener("submit", deleteBike);
let form4 = document.getElementById("loadJSON");
form4.addEventListener("click", loadJSON);

loadStorage();

function enterBike(e) {
    e.preventDefault();
    let form = e.target;
    let marca = getCleanInput(form.children[1].value, "marca", "string");
    let modelo = getCleanInput(form.children[3].value, "modelo", "string");
    let precio = getCleanInput(form.children[5].value, "precio", "number");
    if (marca == null || modelo == null || precio == null) { return };
    bike = new Bici(marca, modelo, precio);
    bikeCount++;
    bike.id = bikeCount;
    bikeArray.push(bike);
    writeBikeList();
}


function deleteBike(e) {
    e.preventDefault();
    if (bikeArray.length == 0) {
        //Alerta nueva y reemplazado el alert por defecto
        myToastify("No hay bicicletas para borrar");
    } else {
        let selectDelete = e.target.children[1].value.trim();
        let found = bikeArray.findIndex((bike) => bike.id == selectDelete);
        if (found == -1) {
            //Reemplazado el alert por defecto
            myToastify("Debes ingresar un ID válido para borrar");
        } else {
            bikeArray.splice(found, 1);
            writeBikeList();
        }
    }
}

function deleteAllBikes() {
    if (bikeArray.length == 0) {
        //Alerta nueva y reemplazado el alert por defecto
        myToastify("No hay bicicletas para borrar");
    } else {
        bikeArray = [];
        bikeCount = 0;
        writeBikeList();
    }
}

function writeBikeList() {
    for (const form of document.getElementsByTagName("form")) { form.reset() }
    let paragraph = document.getElementsByTagName("ul")[0];
    paragraph.textContent = '';
    paragraph.innerHTML = "Lista de bicis:";
    if (bikeArray.length == 0) {
        let msg = document.createElement("li");
        msg.innerHTML = "(No hay bicicletas para mostrar)";
        paragraph.appendChild(msg);
    } else {
        bikeArray.forEach((bike) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = bike.show();
            paragraph.appendChild(listItem);
        })
    }
    saveStorage();
}

function loadStorage() {
    const savedBikes = JSON.parse(localStorage.getItem("savedBikes"));
    for (const bike of savedBikes) {
        bikeArray.push(new Bici(bike.marca, bike.modelo, bike.precio, bike.id));
    }
    if (localStorage.getItem("bikeCount")) {
        bikeCount = parseInt(localStorage.getItem("bikeCount"));
    }
    writeBikeList();
}

function saveStorage() {
    localStorage.setItem("savedBikes", JSON.stringify(bikeArray));
    localStorage.setItem("bikeCount", bikeCount)
}




//Función asincrónica
async function loadJSON() {
    const resp = await fetch('/resources/bikes.json'); //archivo precreado
    const data = await resp.json();
    data.forEach((bike) => {
        bikeCount++ //para no interferir con la numeración, sigo trabajando con bikeCount
        bikeArray.push(new Bici(bike.marca, bike.modelo, bike.precio, bikeCount)); //se pushea un a new Bici
    })
    writeBikeList();
    myToastify("Bicicletas cargadas del archivo JSON"); //notificación
}