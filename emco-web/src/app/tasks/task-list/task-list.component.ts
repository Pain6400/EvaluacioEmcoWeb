import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';
import { Task } from '../../tasks/task.model';
import { CreateTaskDialogComponent } from '../../create-task-dialog/create-task-dialog.component'; // Asegúrate de tener este componente
import { EditTaskDialogComponent } from '../../edit-task-dialog/edit-task-dialog.component'; // Importa el componente de edición
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  isAdmin: boolean = false;

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private dialog: MatDialog // Inyectar MatDialog para abrir modales
  ) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        console.log(this.tasks)
      });
  }

  openCreateTaskModal() { // Asegúrate de que este método esté aquí
    const dialogRef = this.dialog.open(CreateTaskDialogComponent, {
      width: '400px',
      data: {} // Puedes pasar datos adicionales si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getTasks(); // Recargar las tareas después de crear una nueva
      }
    });
  }

  updateStatus(taskId: number, newStatus: string) {
    this.taskService.updateTaskStatus(taskId, newStatus).subscribe(
      () => {
        this.getTasks();
        alert('Tarea actualizada con éxito');
      },
      error => {
        alert('Error al actualizar la tarea');
        console.error(error);
      }
    );
  }

  editTask(task: Task) { // Implementa el método editTask
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
      width: '400px',
      data: task // Pasa la tarea seleccionada al diálogo
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getTasks(); // Recargar las tareas después de editar
      }
    });
  }
}
