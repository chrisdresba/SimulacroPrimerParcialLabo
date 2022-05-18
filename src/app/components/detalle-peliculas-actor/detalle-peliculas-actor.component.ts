import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-peliculas-actor',
  templateUrl: './detalle-peliculas-actor.component.html',
  styleUrls: ['./detalle-peliculas-actor.component.scss']
})
export class DetallePeliculasActorComponent implements OnInit {

  @Input() peliculas : Pelicula[] = [];
  @Input() hayPeliculas : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
