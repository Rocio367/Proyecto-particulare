import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShellRoutingModule} from './shell-routing.module';
import {ShellComponent} from './pages/shell/shell.component';
import {HeaderComponent} from './pages/header/header.component';
import {MainComponent} from './pages/main/main.component';
import {FooterComponent} from './pages/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {GoBackDirective} from '../../shared/directives/go-back.directive';
import {CloseMenuDirective} from '../../shared/directives/close-menu.directive';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {BadgeModule} from 'primeng/badge';


@NgModule({
  declarations:[
    ShellComponent, HeaderComponent, MainComponent, FooterComponent,
    GoBackDirective, CloseMenuDirective
  ],
  imports:[
    InputTextModule,
    ButtonModule,
    MenubarModule,BadgeModule,
    CommonModule, ShellRoutingModule,AngularMaterialModule,SharedModule,
    MatCardModule, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule, MatSnackBarModule, MatExpansionModule,
  ],
  exports:[ShellComponent, ShellRoutingModule, CloseMenuDirective, GoBackDirective],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],

})
export class ShellModule {
}
