class Bici {
    constructor(marca,modelo,precio,id) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = parseFloat(precio);
        this.id = parseInt(id); //pequeño cambio, ahora el id puede venir en el constructor porque puede venir del storage
    }
    show() {
        return (this.id + ". " + this.marca + " " + this.modelo + ": " + "$" + this.precio);
    }
    //También me deshice de la función inútil set_id
}