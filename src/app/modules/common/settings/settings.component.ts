import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  @Input() isSettingsActive = false;
  @Output() childEvent = new EventEmitter<any>();
  @Output() layoutChangeEvent = new EventEmitter<any>();
  @Input() isLayoutLtr = true

  toggleSettings() {
    this.isSettingsActive = false;
    this.childEvent.emit(this.isSettingsActive)
  }

  setLayoutLtr() {
    this.isLayoutLtr = true
    localStorage.setItem('isLayoutLtr', 'true')
    this.layoutChangeEvent.emit(this.isLayoutLtr)
  }

  setLayoutRtl() {
    this.isLayoutLtr = false
    localStorage.setItem('isLayoutLtr', 'false')
    this.layoutChangeEvent.emit(this.isLayoutLtr)
}
}