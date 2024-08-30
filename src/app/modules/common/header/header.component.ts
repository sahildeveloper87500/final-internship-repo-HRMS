// import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core-module/auth-service/auth.service';
// import { Router } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() pageTitle: string | undefined; // Input property to receive page title

  

  // pageTitle: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    // private router: Router,
    private fb: FormBuilder) { }



    
  
    navigateToPage() {
      switch (this.pageTitle) {
        case 'Employee / SubHeader':
          this.router.navigate(['/empSubHeader']);
          break;
        case 'Employee ':
          this.router.navigate(['/main/employee/contact']);
          break;
        case 'Employee/Dashboard':
          this.router.navigate(['/Empdashboard']);
          break;
        // Add cases for other page titles as needed
        default:
          break;
      }
    }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        // Assuming you have defined 'title' in your route's data
        this.pageTitle = data['title'] || 'Home';
      });
  }
  // ngOnInit(): void { }
  // constructor(
    
  // ) { }
  logout() {
    this.auth.logout();
  }
  
  @Input() heading = 'Home'
  @Input() isLayoutLtr: boolean = true;
  isLowerNav = false;

  languages = [
    {
      name: 'English',
      flagClass: 'flag flag-united-states'
    },
    {
      name: 'Hindi',
      flagClass: 'flag flag-india'
    },
    {
      name: 'Arabic',
      flagClass: 'flag flag-saudi-arabia'
    },
    {
      name: 'Chinese',
      flagClass: 'flag flag-china'
    },
    {
      name: 'Japanese',
      flagClass: 'flag flag-japan'
    }
  ]

  alerts = [
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
  ]

  messages = [
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
  ]

  isLangDropOpen = false
  isAlertDropOpen = false
  isMsgDropOpen = false
  isProfileDropOpen = false
  isQuickLinkDropOpen = false

  onLangBtnClick(){
    this.isLangDropOpen = !this.isLangDropOpen
    this.isAlertDropOpen = false
    this.isMsgDropOpen = false
    this.isProfileDropOpen = false
    this.isQuickLinkDropOpen = false
  }
  onAlertBtnClick(){
    this.isAlertDropOpen = !this.isAlertDropOpen
    this.isLangDropOpen = false
    this.isMsgDropOpen = false
    this.isProfileDropOpen = false
    this.isQuickLinkDropOpen = false
  }
  onMsgBtnClick(){
    this.isMsgDropOpen = !this.isMsgDropOpen
    this.isLangDropOpen = false
    this.isAlertDropOpen = false
    this.isProfileDropOpen = false
    this.isQuickLinkDropOpen = false
  }
  onProfileBtnClick(){
    this.isProfileDropOpen = !this.isProfileDropOpen
    // this.isLangDropOpen = false
    // this.isAlertDropOpen = false
    // this.isMsgDropOpen = false
    // this.isQuickLinkDropOpen = false
  }
  onQuickLinkBtnClick(){
    this.isQuickLinkDropOpen = !this.isQuickLinkDropOpen
    this.isProfileDropOpen = false
    this.isLangDropOpen = false
    this.isAlertDropOpen = false
    this.isMsgDropOpen = false
  }

  toggleLowerNavbar() {
    this.isLowerNav = !this.isLowerNav
}

showTabs: boolean = false;
toggleTabs() {
  this.showTabs = !this.showTabs;
}
preventClose(event: MouseEvent) {
  event.stopPropagation();
}
}