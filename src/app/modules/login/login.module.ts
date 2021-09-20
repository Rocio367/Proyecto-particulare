import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {LoginComponent} from './pages/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations:[LoginComponent],
  imports:[CommonModule, LoginRoutingModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, ReactiveFormsModule, MatSnackBarModule],
  exports:[LoginRoutingModule]
})
export class LoginModule {
}
