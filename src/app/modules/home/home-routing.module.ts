import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuard} from '../../core/guards/auth.guard';


const routes:Routes = [
  {path:'home', component:HomeComponent, },
  {path:'home(toolbar:home)', component:HomeComponent},
  {path:'',  component:HomeComponent},
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class HomeRoutingModule {
}
