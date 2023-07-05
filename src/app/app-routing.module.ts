import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleAlimentoComponent } from './detalle-alimento/detalle-alimento.component';

const routes: Routes = [
  { path: 'detalle-alimento', component: DetalleAlimentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
