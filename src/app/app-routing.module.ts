import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ResultadoComponent } from './paginas/resultado/resultado.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'resultado', component: ResultadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
