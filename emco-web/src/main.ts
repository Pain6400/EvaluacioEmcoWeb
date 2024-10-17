import { bootstrapApplication } from '@angular/platform-browser';
import { AppConfig } from './app/app.config';  // Cambia 'appConfig' a 'AppConfig'
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, AppConfig)  // Cambia 'appConfig' a 'AppConfig'
  .catch((err) => console.error(err));
