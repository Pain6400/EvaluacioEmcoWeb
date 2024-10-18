import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';
import { Task } from '../tasks/task.model';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
})
export class EditTaskDialogComponent {
  task: Task;

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task, // Recibe la tarea a editar
    private taskService: TaskService
  ) {
    this.task = data; // Asigna la tarea a editar
  }

  save() {
    this.taskService.updateTask(this.task).subscribe(() => {
      this.dialogRef.close(this.task); // Cierra el diálogo y retorna la tarea editada
    });
  }

  cancel() {
    this.dialogRef.close(); // Cierra el diálogo sin guardar
  }
}
