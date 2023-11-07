import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students: { name: string; last_name: string }[] = [];

  constructor() {}
  addStudents(studentData: { name: string; last_name: string }) {
    this.students.push(studentData);
  }
}
