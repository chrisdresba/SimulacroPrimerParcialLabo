import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorService } from 'src/app/services/actor.service';
import Swal from 'sweetalert2';


import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  actorSeleccionado?: Actor;
  formulario: FormGroup;

  public actor?: Actor;
  public actores?: Actor[];

  nombre: string = '';
  apellido: string = '';
  pais: string = '';

  constructor(public act: ActorService, public fb: FormBuilder) {
    this.formulario = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'pais': new FormControl("", Validators.required)
    })

  }

  ngOnInit(): void {
  }

  elegirPais(pais: any) {
    this.pais = pais.pais;
  }

  guardarActor() {
    let actor = new Actor();

    if (!this.nombre || !this.apellido || !this.pais) {
      Swal.fire({
        icon: 'warning',
        title: 'Debe ingresar todos los datos',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      actor.crearActor(this.nombre, this.apellido, this.pais)
      this.act.guardarActor(actor);
      this.reiniciarValores();
      Swal.fire({
        icon: 'success',
        title: 'El Actor fue creado con exito',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  reiniciarValores() {
    this.nombre = "";
    this.apellido = "";
    this.pais = "";
  }

  detalleActor(actor: Actor) {
    this.actor = actor;
  }



}