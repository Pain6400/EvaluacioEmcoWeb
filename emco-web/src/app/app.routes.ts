import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Importa el AuthGuard
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './tasks/task-list/task-list.component'; // Componente de lista de tareas

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Ruta para el login
  {
    path: 'tasks',
    component: TaskListComponent,
    canActivate: [AuthGuard], // Protege la ruta con el AuthGuard
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a login por defecto
  { path: '**', redirectTo: 'login' }, // Redirige rutas no encontradas a login
];
