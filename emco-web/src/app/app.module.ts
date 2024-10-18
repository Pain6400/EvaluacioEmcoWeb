import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes'; // Importa el módulo de rutas
import { CommonModule } from '@angular/common'; // Importar CommonModule

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateTaskDialogComponent } from './create-task-dialog/create-task-dialog.component'; // Asegúrate de que este componente esté declarado
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component'; // Asegúrate de que este componente esté declarado
import { TaskListComponent } from './tasks/task-list/task-list.component'; // Agrega el componente TaskListComponent

// Importar módulos de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; // Si usas botones
import { MatSelectModule } from '@angular/material/select'; // Si usas select

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateTaskDialogComponent,
    EditTaskDialogComponent,
    TaskListComponent // Declarar TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule, // Asegúrate de que CommonModule esté importado
    routes
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
