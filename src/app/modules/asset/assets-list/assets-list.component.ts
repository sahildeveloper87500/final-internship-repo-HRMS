import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss']
})
export class AssetsListComponent {
  AttendanceEmployee = [
    { id: '1', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '2', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '3', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '4', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '5', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '6', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '7', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '7', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '8', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '9', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '10', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '11', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '13', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '14', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '15', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '16', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
    { id: '17', category: 'Laptop', serial_no: 'LAP1223r2', models: 'Dell Vostro-i5', status: 'In-stock', assigned_employee: 'Aaron Hamillton', assign_on: '01 jan 2024', warranty_ends: '01 jan 2024' },
  ]


  constructor(private fb: FormBuilder) {
    this.departmrntForm = this.fb.group({

    });

    this.assetsdetails = this.fb.group({

    });

    this.assignasset = this.fb.group({

    })
  }

  showTabs: boolean = false;

  toggleTabs() {
    this.showTabs = !this.showTabs;

  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }
  departmrntForm: FormGroup

  /////////*Upload Image*/////////

  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  addDepartment() {
    this.imageUrl = null;
    this.showTabs = false;
  }

  //////////*table Data popup/////////

  showData: boolean = false;

  toggleEdit() {
    this.showData = !this.showData;
  }
  addDepartments() {
    this.showData = false;
  }
  preventCloses(event: MouseEvent) {
    event.stopPropagation();
  }

  assetsdetails: FormGroup


  /////////*Dropdown Popup*/////////
  showPopup: boolean = false;

  onOptionSelected(event: Event) {
    this.showPopup = !this.showPopup;

    const target = event.target as HTMLSelectElement;
    const value = target.value;
    if (value === 'option1') {
      this.showPopup = true;
      close
    } else {
      this.showPopup = false;
    }
  }
  confirmassign() {
    this.showPopup = false;
  }
  preventClosese(event: MouseEvent) {
    event.stopPropagation();
  }

  assignasset: FormGroup


}