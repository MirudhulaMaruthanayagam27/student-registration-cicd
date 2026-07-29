import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from './services/student.service';
import { Student } from './models/student.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'student-registration';
  name: string = '';
  email: string = '';
  department: string = '';
  phone: string = '';

  constructor(private studentService: StudentService) {}

  submitForm() {
    console.log("Student Details");
    console.log("Name:", this.name);
    console.log("Email:", this.email);
    console.log("Department:", this.department);
    console.log("Phone:", this.phone);

    const student: Student = {
      name: this.name,
      email: this.email,
      department: this.department,
      phone: this.phone
    };

    this.studentService.addStudent(student).subscribe({
      next: (response) => {
        console.log('Student added successfully!', response);
        alert('Student added successfully!');
      },
      error: (error) => {
        console.error('Error adding student:', error);
        alert('Failed to add student. See console for details.');
      }
    });
  }
}