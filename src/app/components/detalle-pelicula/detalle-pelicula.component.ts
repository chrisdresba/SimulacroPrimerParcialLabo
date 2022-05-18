import { Component,Input,Output, OnInit } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() peliculaParaMostrar? : Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

  LimpiarDetalle()
  {
    this.peliculaParaMostrar = undefined;
    console.info('objeto', this.peliculaParaMostrar);
  }
}
