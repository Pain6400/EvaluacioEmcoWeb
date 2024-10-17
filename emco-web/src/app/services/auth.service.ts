// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config'; // Importa el archivo de configuración

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = AppConfig.apiUrl;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    console.log(this.apiUrl)
    return this.http.post(`${this.apiUrl}/auth/login`, { username, password });
  }

  saveToken(token: string) {
    localStorage.setItem(AppConfig.jwtKey, token); // Usa la clave configurada para almacenar el JWT
  }

  getToken() {
    return localStorage.getItem(AppConfig.jwtKey); // Obtiene el token desde el localStorage
  }
}
