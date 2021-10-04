import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetalleClaseComponent } from './pages/detalle-clase/detalle-clase.component';
import { PagoComponent } from './pages/pago/pago.component';

const routes: Routes = [
  { path: 'detalle-clase/:id', component: DetalleClaseComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaseRoutingModule { }
