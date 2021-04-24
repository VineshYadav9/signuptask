import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './signup/routing';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class AuthModule { 
  static forRoot(): ModuleWithProviders<RouterModule> {
		return {
			ngModule: AuthModule,
			providers: []
		};
	}
}