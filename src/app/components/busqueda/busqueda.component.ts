import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  peliculaSeleccionada?: Pelicula;
  listadoPeliculas: Pelicula[] = [];
  public pelicula?: Pelicula;

  constructor(public router: Router, public servicio: PeliculaService) {

  }

  ngOnInit(): void {
    this.servicio.getPeliculas().subscribe(pelicula => {
      this.listadoPeliculas = pelicula;
    })
  }


  tomarPeliculaParaDetalles(Nueva: Pelicula) {
    console.info('peli', Nueva);
    setTimeout(() => {
      this.peliculaSeleccionada = Nueva;

    }, 500);
  }
}
