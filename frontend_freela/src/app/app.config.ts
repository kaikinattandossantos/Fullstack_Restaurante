import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Importe as funções para configurar o HttpClient com fetch
import { provideHttpClient, withFetch } from '@angular/common/http';

// A palavra 'export' é essencial aqui.
// Ela torna a constante 'appConfig' visível para outros arquivos, como o main.ts.
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Configura o HttpClient para usar a API fetch, corrigindo os erros de SSR
    provideHttpClient(withFetch())
  ]
};