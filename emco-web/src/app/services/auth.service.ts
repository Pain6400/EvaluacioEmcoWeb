import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'token'; // Clave para el token en localStorage

  constructor(private http: HttpClient) {}

  // Función para hacer login
  login(username: string, password: string): Observable<any> {
    return this.http.post('https://api.example.com/auth/login', {
      username,
      password
    });
  }

  // Función para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    // Verificar si el token existe y no está vacío
    return !!token;
  }

  // Función para cerrar sesión
  logout() {
    localStorage.removeItem(this.TOKEN_KEY); // Eliminar el token del localStorage
  }
}
