import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule], // Importa FormsModule y HttpClientModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.access_token) {
          // Si el token está presente, guarda el token y redirige
          localStorage.setItem('access_token', response.access_token);
          this.router.navigate(['/tasks']).then(success => {
            if (success) {
              console.log('Navigation to /tasks successful');
            } else {
              console.log('Navigation to /tasks failed');
            }
          });
        } else {
          // Si no hay token, manejar el error aquí
          alert('Login failed: Invalid credentials');
        }
      },
      (error) => {
        // Maneja el error devuelto por el servidor
        if (error.error.message === 'Invalid credentials') {
          alert('Login failed: Invalid credentials');
        } else {
          alert('An error occurred. Please try again.');
        }
        console.log('Login error:', error); // Para depuración
      }
    );
  }

}
