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
    console.log('test')
    return this.http.post('http://localhost:3000/auth/login', {
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

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user && user.role === 'admin'; // Cambia 'role' según tu implementación de roles
  }

  // Esta función debe devolver el usuario actualmente autenticado
  getCurrentUser(): any {
    // Por ejemplo, podrías obtener el usuario desde el localStorage o un token
    const user = localStorage.getItem('currentUser'); // O desde un JWT token
    return user ? JSON.parse(user) : null;
  }
}
