import { Component, ElementRef, ViewChild } from '@angular/core';
import { StudentsService } from '../students.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent {
  userData = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    last_Name: new FormControl(''),
  });
  constructor(private studentsServise: StudentsService) {}

  get name() {
    return this.userData.get('name');
  }

  onAddStudent(one: HTMLInputElement, two: HTMLInputElement) {
    let name: string = one.value;
    let last_name: string = two.value;
    this.studentsServise.addStudents({ name: name, last_name: last_name });
  }

  onSubmit() {
    console.log(this.userData.value);
  }
  showErrors() {
    console.log(this.name?.errors);
    return 'jest blad';
  }
}
