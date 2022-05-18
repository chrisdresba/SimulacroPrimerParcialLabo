import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';

const routes: Routes = [ {
  path: '',
  redirectTo: 'busqueda',
  pathMatch: 'full'
},
{
  path: 'busqueda',
  component : BusquedaComponent 
},
{
  path: 'bienvenido',
  component : BienvenidoComponent
},
{
  path: 'peliculas/alta',
  component : PeliculaAltaComponent 
},
{
  path: 'peliculas/listado',
  component : PeliculaListadoComponent
},
{
  path: 'actor/alta',
  component : ActorAltaComponent 
},
{
  path: 'actor/pelicula',
  component : ActorPeliculaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
