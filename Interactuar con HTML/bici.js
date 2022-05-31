//Clase simple de bicis
class Bici {
    constructor(marca,modelo,precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio
        this.id = -1
    }
    show(){
        return (this.id + ". " + this.marca + " " + this.modelo + ": " + "$" + this.precio);
    }
    set_id(n){
        this.id = n;
    }

}