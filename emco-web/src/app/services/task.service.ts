import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../tasks/task.model';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks'; // Ajusta la URL de tu API aquí

  constructor(private http: HttpClient) {}

  // Método para obtener todas las tareas
  // getTasks(): Observable<Task[]> {
  //   const headers = this.getHeaders(); // Obtener los encabezados con el token
  //   return this.http.get<Task[]>(`${this.apiUrl}/getAll`, { headers });
  // }

  getTasks(): Observable<Task[]> {
    const headers = this.getHeaders(); // Asegúrate de que esto devuelve las cabeceras con el token
    console.log('Headers:', headers); // Agrega un console.log para verificar las cabeceras
    return this.http.get<Task[]>(`${this.apiUrl}/getAll`, { headers })
      .pipe( // Agrega un console.log para verificar las tareas recibidas
        catchError(error => {
          console.error('Error al obtener tareas:', error); // Manejo de errores
          throw error; // Re-lanza el error para que sea manejado por el componente que llama a getTasks
        })
      );
  }
  // Método para crear una nueva tarea
  createTask(task: Task): Observable<Task> {
    const headers = this.getHeaders();
    return this.http.post<Task>(`${this.apiUrl}/create`, task, { headers });
  }

  // Método para actualizar una tarea
  updateTask(task: Task): Observable<Task> {
    const headers = this.getHeaders();
    return this.http.put<Task>(`${this.apiUrl}/update/${task.id}`, task, { headers });
  }

  // Método para actualizar el estado de una tarea
  updateTaskStatus(taskId: number, newStatus: string): Observable<void> {
    const headers = this.getHeaders();
    return this.http.patch<void>(`${this.apiUrl}/updateStatus/${taskId}`, { status: newStatus }, { headers });
  }

  // Método privado para obtener los encabezados con el token
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }
}
