import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  AttendanceEmployee = [
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
    { id: '1', date: '01 jan 2024', punch_in: '10 AM', punch_out: '5 PM' },
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