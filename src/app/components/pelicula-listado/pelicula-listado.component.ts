import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {


  @Input() listadoPeliculas: Pelicula[];
  @Output() peliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();

  constructor(public act: PeliculaService) {
    this.listadoPeliculas = [];
  }


  ngOnInit() {

  }

  mostrarDetalles(parametro: Pelicula) {
    this.peliculaSeleccionada.emit(parametro);
  }

}
