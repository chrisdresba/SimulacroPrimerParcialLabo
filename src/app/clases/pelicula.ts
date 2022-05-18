import { Actor } from 'src/app/clases/actor';

export class Pelicula {
    
    constructor(public nombre: string,
        public tipo: string,
        public fecha: string,
        public cantidad: number,
        public foto: any,
        public actores : Actor[]
    ){
    }

  

}