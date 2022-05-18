import { Component,OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Actor} from 'src/app/clases/actor';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  @Input() public listadoActores? : Actor[];
  @Output() actorSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 
  constructor(public act: ActorService) { 
    this.listadoActores = [];
  }

  ngOnInit(): void {
    this.act.getActores().subscribe(actor => {
      this.listadoActores = actor;
    })
  }

  eligeActor(parametro:Actor)
  {
    this.actorSeleccionado.emit(parametro);
  }

}
