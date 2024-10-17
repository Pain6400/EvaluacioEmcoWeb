// src/app/app.config.ts
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export const AppConfig = {
  apiUrl: 'https://example.com/api', // URL base para las llamadas API
  jwtKey: 'access_token', // Nombre de la llave donde se almacenará el JWT en localStorage
  environment: 'development', // Configuración del entorno (puede ser 'production' o 'development')
  defaultLanguage: 'en', // Idioma predeterminado de la app
  providers: [importProvidersFrom(HttpClientModule)],
};
