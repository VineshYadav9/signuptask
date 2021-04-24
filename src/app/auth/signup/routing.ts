import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from './signup.component';

const routes: Routes = [
  {
    path: 'signup',
    component : SignupComponent
  },
  {
    path: 'login',
    component : LoginComponent
  }
];

export const routing = RouterModule.forChild(routes) ;
