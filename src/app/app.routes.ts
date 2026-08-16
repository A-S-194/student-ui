import { Routes } from '@angular/router';
import { StudentList } from './components/student-list/student-list';
import { StudentForm } from './components/student-form/student-form';

export const routes: Routes = [
    {path: '', redirectTo:'registerStudent', pathMatch:'full'},
    {path: 'registerStudent', component: StudentForm },
    {path: 'viewStudents', component: StudentList},
];
