import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';


const routes:Routes = [
  {path:'landing-page', component:LandingPageComponent, },
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
