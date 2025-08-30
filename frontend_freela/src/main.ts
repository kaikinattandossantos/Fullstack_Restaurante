import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';

// A ordem correta é: bootstrapApplication(COMPONENTE, CONFIGURAÇÕES)
const bootstrap = () => bootstrapApplication(AppComponent, appConfig);
export default bootstrap;