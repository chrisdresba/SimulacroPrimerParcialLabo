import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pais } from './../../clases/pais';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {
  @Output() onSeleccionPais : EventEmitter<Pais> = new EventEmitter<Pais>();
  public paises : Pais[] = [];

  constructor( private service : PaisService ) {
     this.service.traerPaises().subscribe( ( paises : any ) => {
      this.paises = paises.slice( 0, 249);
      this.paises = this.paises.sort((a?, b?) => (a.pais! > b.pais! ? 1 : -1));
    } )
  }
  ngOnInit(): void {

  }
  
  seleccionarPais( pais? : Pais ) {
    this.onSeleccionPais.emit(pais);
  }


}

 