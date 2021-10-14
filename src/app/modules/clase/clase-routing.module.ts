import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetalleClaseComponent } from './pages/detalle-clase/detalle-clase.component';
import { PagoComponent } from './pages/pago/pago.component';
import { CrearClaseComponent } from './pages/crear-clase/crear-clase.component';
import { VerMisClasesParticularComponent } from './pages/ver-mis-clases-particular/ver-mis-clases-particular.component';
import { DetalleClaseParticularComponent } from './pages/detalle-clase-particular/detalle-clase-particular.component';
import { EditarClaseParticularComponent } from './pages/editar-clase-particular/editar-clase-particular.component';



const routes: Routes = [
  { path: 'detalle-clase', component: DetalleClaseComponent },
  { path: 'editar-detalle-clase-particular', component: EditarClaseParticularComponent },
  { path: 'detalle-clase-particular', component: DetalleClaseParticularComponent },
  { path: 'crear-clase', component: CrearClaseComponent },
  { path: 'ver-clase-particular', component: VerMisClasesParticularComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaseRoutingModule { }
