import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http
      .post('https://api.example.com/auth/login', {
        username: this.username,
        password: this.password,
      })
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response.access_token); // Guarda el token
          this.router.navigate(['/tasks']); // Redirige a las tareas
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
        }
      );
  }
}
