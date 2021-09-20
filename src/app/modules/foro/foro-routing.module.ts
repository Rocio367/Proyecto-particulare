import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ForoComponent } from './pages/foro/foro.component';
import { TemasForoComponent } from './pages/temas-foro/temas-foro.component';


const routes:Routes = [
  {path:'foro', component:ForoComponent},
  {path:'temas-foro', component:TemasForoComponent},

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ForoRoutingModule { }
