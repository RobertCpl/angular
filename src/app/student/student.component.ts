import { Component, Input, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() name!: string;

  constructor(private studentsServise: StudentsService) {}
  ngOnInit(): void {}
}
