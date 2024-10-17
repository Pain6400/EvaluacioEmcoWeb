// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './app.config'; // Importa tu archivo de configuración

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = AppConfig.apiUrl; // Usa la URL definida en tu configuración

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(`${this.apiUrl}/tasks`);
  }
}
