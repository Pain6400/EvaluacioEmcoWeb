import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.css']
})
export class CreateTaskDialogComponent {
  taskForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    private taskService: TaskService,
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      assignedTo: ['', Validators.required]
    });
  }

  createTask() {
    if (this.taskForm.valid) {
      this.taskService.createTask(this.taskForm.value).subscribe(
        () => {
          this.dialogRef.close(true); // Cerrar el modal y notificar que la tarea se creó con éxito
        },
        error => {
          alert('Error al crear la tarea');
          console.error(error);
        }
      );
    }
  }


  close() {
    this.dialogRef.close();
  }
}
