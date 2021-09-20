import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BusquedaModule } from './busqueda.module';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';


const routes:Routes = [
  {path:'busqueda/:q', component:BusquedaComponent},

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class BusquedaRoutingModule { }
