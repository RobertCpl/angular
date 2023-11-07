import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentsService],
})
export class AppComponent implements OnInit {
  students: { name: string; last_name: string }[] = [];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.students = this.studentsService.students;
  }
  showStudents() {
    console.log(this.students);
  }
}
