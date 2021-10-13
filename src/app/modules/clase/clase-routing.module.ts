import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetalleClaseComponent } from './pages/detalle-clase/detalle-clase.component';
import { PagoComponent } from './pages/pago/pago.component';
import { CrearClaseComponent } from './pages/crear-clase/crear-clase.component';
import { VerMisClasesParticularComponent } from './pages/ver-mis-clases-particular/ver-mis-clases-particular.component';



const routes: Routes = [
  { path: 'detalle-clase', component: DetalleClaseComponent },
  { path: 'crear-clase', component: CrearClaseComponent },
  { path: 'ver-clase-particular', component: VerMisClasesParticularComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaseRoutingModule { }
