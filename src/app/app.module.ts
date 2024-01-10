import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';

export const API_URL = new InjectionToken<string>('apiUrl')

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    LoginComponent
  ],
  providers:[
    {provide: API_URL, useValue: 'http://localhost:4200'}
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
