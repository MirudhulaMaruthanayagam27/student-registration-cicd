import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

// Everything the application needs at start-up is listed here.
// provideHttpClient() makes HttpClient injectable anywhere in the app.
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient()
  ]
};
