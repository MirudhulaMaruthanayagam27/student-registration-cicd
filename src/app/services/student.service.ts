import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }

  addStudent(student: Student): Observable<any> {
    const baseUrl = environment.apiUrl ? (environment.apiUrl.endsWith('/') ? environment.apiUrl : environment.apiUrl + '/') : '';
    return this.http.post<Student>(
      `${baseUrl}students`,
      student
    );
  }
}
