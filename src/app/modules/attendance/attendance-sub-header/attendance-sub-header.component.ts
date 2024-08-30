import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-attendance-sub-header',
  templateUrl: './attendance-sub-header.component.html',
  styleUrls: ['./attendance-sub-header.component.scss']
})
export class AttendanceSubHeaderComponent {
  showTabs = true;
  activeTab: string = '';

  // setActiveTab(tabName: string) {
  //   this.activeTab = tabName;
  // }

  constructor(private router: Router) { }

  toggleTabs() {
    this.showTabs = !this.showTabs;
  }

  selectTab(event: any): void {
    const selectedRoute = event.target.value;
    this.router.navigateByUrl(selectedRoute);
  }
  // // constructor(private router: Router) { }


  goBack() {
    this.router.navigate(['/']); // Navigate back to the previous page
  }


  showShare = false;
  toggleShare() {
    this.showShare = !this.showShare;
  }
}
