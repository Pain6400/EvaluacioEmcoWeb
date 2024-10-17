import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes'; // Importa el módulo de rutas

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// Importa otros componentes y servicios

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // Otros componentes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes // Agrega el módulo de rutas aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
