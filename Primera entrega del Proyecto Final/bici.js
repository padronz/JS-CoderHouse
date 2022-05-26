class Bici {
    constructor(modelo,marca,precio){
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio
        this.id = -1
    }
    show(){
        return (this.id + ". " + this.marca + " " + this.modelo + ": " + "$");
    }
    set_id(n){
        this.id = n;
    }

}