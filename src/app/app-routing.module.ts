import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './mainlayout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component : LayoutComponent , canActivate :[AuthGuard],
    children : [
      {
        path: '',
        redirectTo : 'dashboard', pathMatch : 'full'
      },
      {
        path: 'dashboard',
        component : DashboardComponent
      }
    ]
  },
  {
    path : "auth",
    loadChildren :() => import('./auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path : '**',
    redirectTo : ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
