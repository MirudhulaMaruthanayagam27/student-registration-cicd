import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Student } from '../models/student.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // The URL is NOT hardcoded. It comes from the environment file,
  // so a production build can point at a different API.
  private apiUrl = `${environment.apiUrl}/students`;

  constructor(private http: HttpClient) {}

  // GET /students  -> read every student
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  // POST /students -> create one student
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  // DELETE /students/:id -> remove one student
  deleteStudent(id: number): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
