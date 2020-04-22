import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { DashboardComponent } from './navbar/navbarcomponents/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TabuleComponent } from './navbar/navbarcomponents/dashboard/tabule/tabule.component';
import { CountCardComponent } from './navbar/navbarcomponents/dashboard/count-card/count-card.component';
import { GraphChartComponent } from './navbar/navbarcomponents/dashboard/graph-chart/graph-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    CountCardComponent,
    TabuleComponent,
    GraphChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    ChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
