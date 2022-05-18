export class Actor {
    nombre?: string
    apellido?: string
    pais?: string

    constructor(){
    }

    crearActor(nombre : string, apellido : string, pais : string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
}
