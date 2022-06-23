

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