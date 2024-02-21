import { ApplicationConfig , importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from '../environments/environment.development';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]

};
