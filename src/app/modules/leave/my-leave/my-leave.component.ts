import { Component } from '@angular/core';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss']
})
export class MyLeaveComponent {
  constructor() { }

  selectAllCheckboxes() {
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[name="chk"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  }

  deselectAllCheckboxes() {
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[name="chk"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
 });
 }
}