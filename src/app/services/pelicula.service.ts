import { Injectable } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map,Observable } from 'rxjs';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  public listadoPeliculas:Observable<any[]>;
  
  constructor(private firestore: AngularFirestore) { 
 this.listadoPeliculas = this.firestore.collection('peliculas').valueChanges();
};
  
  
getPeliculas = (): Observable<any[]> => {
  return this.firestore.collection('peliculas').snapshotChanges().pipe(
    map(docs => {
      return docs.map(d => d.payload.doc.data()) as Pelicula[];
    })
  );
}

async guardarPelicula(nombre:string,tipo:string, fecha:string,cantidad:number, foto:string,actores:Actor[]){
    let entidad = {'nombre':nombre,'tipo':tipo, 'fecha':fecha, 'cantidad':cantidad, 'foto':foto,'actores':actores}
    return await this.firestore.collection('peliculas').add(entidad);
  }
}






