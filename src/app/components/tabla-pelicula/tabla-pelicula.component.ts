import { Component, Input ,Output,EventEmitter, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() public listadoPeliculas? : Pelicula[];
  @Output() public peliculaSeleccionada : EventEmitter<any> = new EventEmitter<Pelicula>();
  
  constructor() { 
    this.listadoPeliculas = [];
  }

  ngOnInit(): void {
  }

  eligePelicula ( pelicula : Pelicula ) {
    this.peliculaSeleccionada.emit( pelicula );
  }

}
