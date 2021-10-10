import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoPrimeNgComponent } from './components/demoprimeng.component';



const routes:Routes = [
  {path:'demo-primeng', component:DemoPrimeNgComponent},
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DemoPrimeNgRoutingModule { }
