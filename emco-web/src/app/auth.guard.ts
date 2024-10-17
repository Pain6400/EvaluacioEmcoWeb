import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token'); // Verifica si el token está presente
    if (token) {
      return true; // Si hay token, permite el acceso
    } else {
      this.router.navigate(['/login']); // Si no hay token, redirige al login
      return false;
    }
  }
}
