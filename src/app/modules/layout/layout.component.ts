import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { employeeList } from 'src/app/shared/models/employeelist';
import { EmployeeServiceService } from '../employee/employee-service/employee-service.service';
import { Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  // standalone: true,
  // imports: [MatTableModule, MatCheckboxModule],  
})
export class LayoutComponent {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  
  showTabs: boolean = false;
  toggleTabs() {
    this.showTabs = !this.showTabs;
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }
 showEdits: boolean = false;

 
 employeeList: Array<employeeList> = []

 validationForm: FormGroup;

 constructor(private employeeApiService: EmployeeServiceService,private renderer: Renderer2, private elementRef: ElementRef) {

  this.validationForm = new FormGroup({
    input1: new FormControl(null, Validators.required),
    input2: new FormControl(null, Validators.required),
    input: new FormControl(null, Validators.required),
    textarea: new FormControl(null, Validators.required),
    select: new FormControl(null, Validators.required),
    checkbox: new FormControl(null, Validators.requiredTrue),
    
  });

 }
 dtOptions: DataTables.Settings={}; 
//  showTabs: boolean = false;

//  toggleTabs() {
//    this.showTabs = !this.showTabs;
//  }
 addDepartment() {
   this.showTabs = false;
 }
//  preventClose(event: MouseEvent) {
//    event.stopPropagation();
//  }
 dtTrigger: Subject<any> = new Subject<any>();


 ngOnInit() { 
   this.getProductCategoryList();
   this.dtOptions = {
    
     pagingType: 'full_numbers',
     language: {
       searchPlaceholder: 'SEARCH'  
      
     },
     lengthChange: true,
    //  dom: 'Rfrtlip'  ,
    // dom: '<"top"f><"text-center"irt><"bottom"ilp><"clear">'


    //  dom: '<"top"f>rt<"bottom"ilp><"clear">'
     dom: '<"top"f><"text-center"irt><"bottom"ilp><"clear">'

     
     
     
   };  

  //    // Dynamically set the width of the table element based on screen size
  // this.setTableWidth();


 }

//  setTableWidth() {
//   const tableElement = this.elementRef.nativeElement.querySelector('table');
//   const screenWidth = window.innerWidth;

//   if (screenWidth < 768) { // Adjust the breakpoint according to your design
//     // For mobile screens, set the table width to 100%
//     this.renderer.setStyle(tableElement, 'width', '100%');
//   } else {
//     // For other screens, set the table width to auto or any other value as needed
//     this.renderer.removeStyle(tableElement, 'width');
//   }
// }

  
 getProductCategoryList() {
   this.employeeApiService.getEmpWithId().subscribe(res => {
     // you will gte your data here
     this.employeeList = res;
     this.dtTrigger.next(null);
     console.log(res);
   })
 }









//  dtOptions: DataTables.Settings={}; 

//  dtTrigger: Subject<any> = new Subject<any>();

//  HolidayList =[ 
//   {Id:'1',holidaytype: 'National', holidayName: 'New Year', from:'01 jan 2024', to: '01 jan 20214', total: '1 day', createdBy: 'Niraj Sir', },
//   {Id:'2',holidaytype: 'Manual', holidayName: 'Republic Day', from:'26 jan 2024', to: '26 jan 20214', total: '1 day', createdBy: 'Niraj Sir', },
// ];
// ngOnInit() { 
//   // this.HolidayList();
//   this.HolidayList;
//   this.dtOptions = {
//     pagingType: 'full_numbers',
//     language: {
//       searchPlaceholder: 'SEARCH'
//     }
//   };  
// }
// validation
 
// validationForm: FormGroup;
  // constructor() {
   
  

  get input1(): AbstractControl {
    return this.validationForm.get('input1')!;
  }
  get input2(): AbstractControl {
    return this.validationForm.get('input2')!;
  }
  get input(): AbstractControl {
    return this.validationForm.get('input')!;
  }

  get textarea(): AbstractControl {
    return this.validationForm.get('textarea')!;
  }

  get select(): AbstractControl {
    return this.validationForm.get('select')!;
  }
 onSubmit(): void {
    this.validationForm.markAllAsTouched();
  }



}
