import { Component, inject } from '@angular/core';
import { StudentService } from '../../services/student-service';
import { Student } from '../../models/student.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-student-list',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {

  studentService: StudentService = inject(StudentService);
  students$!: Observable<Student[]>;

 ngOnInit(){
  this.students$ = this.studentService.getAllStudents();
 }
}
