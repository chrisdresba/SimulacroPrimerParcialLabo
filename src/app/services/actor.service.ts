import { Injectable } from '@angular/core';
import { Actor } from '../clases/actor';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  public listadoActores: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.listadoActores = this.firestore.collection('actores').valueChanges();
  }

  getActores = (): Observable<any[]> => {
    return this.firestore.collection('actores').snapshotChanges().pipe(
      map(docs => {
        return docs.map(d => d.payload.doc.data()) as Actor[];
      })
    );
  }




  async guardarActor(actor: Actor) {
    let entidad = { 'nombre': actor.nombre, 'apellido': actor.apellido, 'pais': actor.pais }
    return await this.firestore.collection('actores').add(entidad);
  }

}
