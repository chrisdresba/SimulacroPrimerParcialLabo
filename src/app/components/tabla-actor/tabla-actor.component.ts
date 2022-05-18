import { Component ,Output,EventEmitter,OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  public listadoActores : Actor[];
  @Output() onSeleccionActor : EventEmitter<Actor> = new EventEmitter<Actor>();


  constructor(public act: ActorService) {
    this.listadoActores = [];
   }

  ngOnInit(): void {
    this.act.getActores().subscribe(actor => {
      this.listadoActores = actor;
    })

  }

  eligeActor ( actor : any ) {
    this.onSeleccionActor.emit( actor );
  }


}
