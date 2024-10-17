// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { AppComponent } from './app.component'; // El componente principal
import { LoginComponent } from './login/login.component'; // El componente de login

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent  // Asegurarte de declarar tu componente aquí
  ],
  imports: [
    BrowserModule,
    FormsModule // Asegurarte de importar FormsModule para usar [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent] // Componente principal que se carga al inicio
})
export class AppModule { }
