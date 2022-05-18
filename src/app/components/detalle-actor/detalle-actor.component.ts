import { Component, Input,OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';


@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.scss']
})
export class DetalleActorComponent implements OnInit {

  @Input() actorParaMostrar? : Actor;

  constructor() { }

  ngOnInit(): void {
  }

  LimpiarDetalle()
  {
    this.actorParaMostrar = undefined;
  }

}
