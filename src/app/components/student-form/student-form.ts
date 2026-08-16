import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { StudentService } from '../../services/student-service';
import { Student } from '../../models/student.model';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-student-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {
  
  private fb = inject(NonNullableFormBuilder);
  private studentService = inject(StudentService);

  studentForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    age: [0, [Validators.required, Validators.min(18), Validators.max(35)]]
  });

  onSubmit():void{
    if(this.studentForm.invalid){
      this.studentForm.markAllAsTouched();
      return;
    }

    const student: Student = this.studentForm.getRawValue();

    this.studentService.registerStudent(student)
      .subscribe({
        next: (response) => {
          console.log("Student Successfully registered", response);
          this.studentForm.reset();
        },
        error: (error) => {
          console.error('Error registering student', error);
        }
      });
  }
}
