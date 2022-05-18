import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase);

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storareRef = firebase.app().storage().ref();

  constructor() { }

  async subirImagen(nombre: string, imgBase: any) {

    try {
      let respuesta = await this.storareRef.child("peliculas/" + nombre).putString(imgBase, 'data_url');
      return await respuesta.ref.getDownloadURL();
    } catch (err) {
      console.log(err);
      return null;
    }

  }
}