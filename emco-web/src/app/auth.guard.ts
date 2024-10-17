import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('access_token');
    if (token) {
      return true; // El token existe, el usuario puede acceder
    } else {
      this.router.navigate(['/login']); // Si no hay token, redirigir al login
      return false;
    }
  }
}
