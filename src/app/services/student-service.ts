import { inject, Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseDto } from '../models/response-dto.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/student";
  
  protected studentList: Student[] = [
    {name: "Anurag", email: "anurag@test.com", age: 27},
    {name: "Kunal", email: "kunal@test.com", age: 28},
    {name: "Amit", email: "amit@test.com", age: 28}
  ];

  getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl);
  }

  getStudentByEmail(email:string): Student| undefined{
    return this.studentList.find( student => student.email === email);
  }

  registerStudent(student: Student): Observable<ResponseDto>{
    return this.http.post<ResponseDto>(this.apiUrl,student);
  }
}
