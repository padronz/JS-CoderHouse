

function getCleanInput(input, prop, type) {
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
        //Reemplazado el alert por defecto
        myToastify("Debes ingresar un ID válido de " + prop);
        return;
    } else {
        return input;
    }
}


//Se pasa esta función a la lista de las que usaré a menudo
function myToastify(alert) {
    Toastify({
        text: alert,
        duration: 2000,
        gravity: 'top',
        position: 'right',
        style: {
            background: "linear-gradient(to right, #ff0000, #A020F0)",
            fontFamily: "Arial, Sans Serif",
            fontSize: '.9em',
        }
    }).showToast();
}