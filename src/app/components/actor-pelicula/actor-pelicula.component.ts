import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { Actor } from 'src/app/clases/actor';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pais } from 'src/app/clases/pais';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})
export class ActorPeliculaComponent implements OnInit {

  actorSeleccionado?: Actor;
  actor? : Actor;
  pais? : Pais;
  hayPeliculas : boolean = false;
  public listadoPeliculas: Pelicula[] = [];
  public peliculas : Pelicula[] = [];
  public listadoActores? : Actor[] = [];
  public listadoPaises : Pais[] = [];

  constructor(public router: Router, public servicio : PeliculaService, public servicioPais : PaisService) { 
  }

  ngOnInit(): void {
    this.servicio.getPeliculas().subscribe(pelicula => {
      this.listadoPeliculas = pelicula;
    })

    this.servicioPais.traerPaises().subscribe(pais => {
      this.listadoPaises = pais;
    })
  }


  buscarPeliculas = () => {
    this.peliculas = [];
    this.listadoPeliculas.forEach((pelicula) => {
      if (pelicula.actores.length > 0) {
   
        pelicula.actores.forEach((item: any) => {
          if (item.nombre == this.actorSeleccionado?.nombre && item.apellido == this.actorSeleccionado?.apellido) {
            this.hayPeliculas = true;
            this.peliculas.push(pelicula);
          }
        })
     
      }
    })
  }

  buscarPais = () => {
    for (let i = 0; i < this.listadoPaises.length; i++) {      
      if (this.actorSeleccionado?.pais == this.listadoPaises[i].pais) {
        this.pais = this.listadoPaises[i];
        break;
      }            
    }
  }

  tomarActorParaDetalles(Nueva: Actor) {

    setTimeout(() => {
      this.actorSeleccionado = Nueva; 
      this.buscarPais();
      this.buscarPeliculas();
    }, 500);
  
  }
}
