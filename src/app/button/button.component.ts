import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output() clicedButtonEmit = new EventEmitter<{
    name: string;
    type: string;
  }>();
  @Input() title!: string;
  disabled = false;

  onClicedHandler(ref: HTMLButtonElement) {
    console.log(ref);
    this.clicedButtonEmit.emit({
      name: 'robert',
      type: 'typ -',
    });
  }
}
