import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './navbar/navbarcomponents/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'Dasboard',
    component: DashboardComponent
  },
  {
    path: '**', component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
