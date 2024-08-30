import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent {
  title = 'Sidebar_Holiday';
  isSidebarActive = false;
  isSettingsActive = false;
  isLayoutLtr: boolean;
  getScreenWidth: any;
  getScreenHeight: any;

  constructor() {
    if (localStorage.getItem('isLayoutLtr')) {
      this.isLayoutLtr = localStorage.getItem('isLayoutLtr') === 'true' ? true : false;
    }
    else {
      this.isLayoutLtr = true;
      localStorage.setItem('isLayoutLtr', 'false')
    }
  }

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if(this.getScreenWidth < 500) {
      this.isLayoutLtr = true
      localStorage.setItem('isLayoutLtr', 'true')
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    if(this.getScreenWidth < 500){
      this.isLayoutLtr = true
      localStorage.setItem('isLayoutLtr', 'true')
    }
  }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  toggleSettings() {
    this.isSettingsActive = !this.isSettingsActive
    console.log('Click')
  }

  // receiveData(event: any) {
  //   this.toggleSidebar()
  // }

  receiveSidebarData(event: any) {
    this.toggleSidebar()
  }

  receiveSettingsData(event: any) {
    this.toggleSettings()
    console.log(this.isLayoutLtr)
  }

  changeLayout(event: any) {
    this.isLayoutLtr = event
    console.log(this.isLayoutLtr)
}
}