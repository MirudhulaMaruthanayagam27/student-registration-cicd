import { Component } from '@angular/core';

import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';

@Component({
  selector: 'app-root',
  imports: [StudentRegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
