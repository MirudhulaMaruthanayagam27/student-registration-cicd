import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.css'
})
export class StudentRegistrationComponent implements OnInit {
  // The form object that the HTML binds to.
  studentForm: FormGroup;

  // The list shown in the table below the form.
  students: Student[] = [];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) {
    // Build the form: one line per field, with its validation rules.
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  // Runs once when the component appears on screen.
  ngOnInit(): void {
    this.loadStudents();
  }

  // GET the students and put them in the table.
  loadStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (data) => (this.students = data),
      error: (err) => console.error('Could not load students:', err)
    });
  }

  // Runs when the Register button is pressed.
  register(): void {
    // If anything is invalid, mark the fields as touched so the
    // error messages become visible, then stop.
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    this.studentService.addStudent(this.studentForm.value).subscribe({
      next: () => {
        this.studentForm.reset();   // clear the form
        this.loadStudents();        // refresh the table
      },
      error: (err) => console.error('Could not add student:', err)
    });
  }

  // Runs when a Delete button in the table is pressed.
  // id is optional on the model, so we check it before using it.
  deleteStudent(id?: number): void {
    if (id === undefined) {
      return;
    }

    this.studentService.deleteStudent(id).subscribe({
      next: () => this.loadStudents(),
      error: (err) => console.error('Could not delete student:', err)
    });
  }
}
