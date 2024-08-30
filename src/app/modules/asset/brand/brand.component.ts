import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {
  AttendanceEmployee =[ 
    {id:'1', punch_in: '10 AM'},
    {id:'2', punch_in: '10 AM'},
    {id:'3', punch_in: '10 AM'},
    {id:'4', punch_in: '10 AM'},
    {id:'5', punch_in: '10 AM'},
    {id:'6', punch_in: '10 AM'},
    {id:'7', punch_in: '10 AM'},
    {id:'8', punch_in: '10 AM'},
    {id:'9', punch_in: '10 AM'},
    {id:'5', punch_in: '10 AM'},
    {id:'6', punch_in: '10 AM'},
    {id:'7', punch_in: '10 AM'},
    {id:'8', punch_in: '10 AM'},
    {id:'9', punch_in: '10 AM'},
  ]


  showTabs: boolean = false;
    
  toggleTabs() {
      this.showTabs = !this.showTabs; 
  }
  addDepartment() {
      this.showTabs = false; 
  }
  preventClose(event: MouseEvent) {
      event.stopPropagation(); 
  }

 departmrntForm!:FormGroup 
}