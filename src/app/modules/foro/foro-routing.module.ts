import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForoComponent } from './pages/foro/foro.component';
import { TemasForoComponent } from './pages/temas-foro/temas-foro.component';
import { ModalNuevoTemaComponent } from './components/modal-nuevo-tema/modal-nuevo-tema.component';

const routes:Routes = [
  {path:'foro', component:ForoComponent},
  {path:'temas-foro', component:TemasForoComponent},
  {path:'nuevo-tema', component:ModalNuevoTemaComponent},

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ForoRoutingModule { }
