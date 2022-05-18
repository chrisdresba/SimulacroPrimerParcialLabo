import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { AngularFireStorage } from '@angular/fire/compat/storage';



import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { PeliculaService } from 'src/app/services/pelicula.service';
import Swal from 'sweetalert2';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  actorSeleccionado?: Actor;
  formulario: FormGroup;
  nombrePelicula: string = '';
  tipo: string = '';
  fecha: string = '';
  cantidad: number = 0;
  foto: string = '';
  actorNombre: string = '';
  actores: Actor[] = [];
  imagen: string = '';
  imagenes: any[] = [];


  constructor(public pel: PeliculaService, public storage: StorageService, public fb: FormBuilder, private fireStorage: AngularFireStorage) {
    this.formulario = this.fb.group({
      'nombrePelicula': new FormControl("", Validators.required),
      'tipo': new FormControl("", Validators.required),
      'fecha': new FormControl("", Validators.required),
      'cantidad': new FormControl("", Validators.required),
      'foto': new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
  }


  async subirArchivo(event: any) {
    const file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        console.log(reader.result);
        this.imagenes.push(reader.result);
        this.storage.subirImagen(this.nombrePelicula + "_" + Date.now(), reader.result).then(urlImagen => {
          this.foto = this.imagenes[0];
          console.info(this.foto);
        });
      }
    }
  }

  elegirActor(actor: Actor) {
    let existe = true;
    this.actorNombre = actor.nombre + " " + actor.apellido;
    this.actores.forEach(item => {
      if (item.nombre == actor.nombre && item.apellido == actor.apellido) {
        existe = false;
      }
    })
    if (existe) this.actores?.push(actor);
  }

  guardarPelicula() {

    if (!this.nombrePelicula || !this.tipo || !this.fecha || this.cantidad == 0 || !this.actorNombre) {
      Swal.fire({
        icon: 'warning',
        title: 'Debe ingresar todos los datos',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      this.pel.guardarPelicula(this.nombrePelicula, this.tipo, this.fecha, this.cantidad, this.foto, this.actores)
      this.reiniciarValores();
      Swal.fire({
        icon: 'success',
        title: 'La pelicula fue creada con exito',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }

  reiniciarValores() {
    this.nombrePelicula = "";
    this.tipo = "";
    this.fecha = "";
    this.cantidad = 0;
    this.foto = "";
    this.imagenes.pop();
    this.actores = [];
  }

}
