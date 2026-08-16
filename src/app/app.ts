import { Component, signal } from '@angular/core';
import { StudentForm } from "./components/student-form/student-form";
import { StudentList } from "./components/student-list/student-list";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-ui');
}
