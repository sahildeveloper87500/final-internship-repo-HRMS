// import {AfterViewInit, Component, ViewChild} from '@angular/core';
// import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
// import {MatSort, MatSortModule} from '@angular/material/sort';
// import {MatTableDataSource, MatTableModule} from '@angular/material/table';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { employeeList } from 'src/app/shared/models/employeelist';
// import { EmployeeServiceService } from '../employee/employee-service/employee-service.service';


// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   fruit: string;
// }

// /** Constants used to fill up our data base. */
// const FRUITS: string[] = [
//   'blueberry',
//   'lychee',
//   'kiwi',
//   'mango',
//   'peach',
//   'lime',
//   'pomegranate',
//   'pineapple',
// ];
// const NAMES: string[] = [
//   'Maia',
//   'Asher',
//   'Olivia',
//   'Atticus',
//   'Amelia',
//   'Jack',
//   'Charlotte',
//   'Theodore',
//   'Isla',
//   'Oliver',
//   'Isabella',
//   'Jasper',
//   'Cora',
//   'Levi',
//   'Violet',
//   'Arthur',
//   'Mia',
//   'Thomas',
//   'Elizabeth',
// ];

// /**
//  * @title Data table with sorting, pagination, and filtering.
//  */


// @Component({
//   selector: 'app-layout-table',
//   templateUrl: './layout-table.component.html',
//   styleUrls: ['./layout-table.component.scss'],
//   standalone: true,
//   imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
// })
// export class LayoutTableComponent implements AfterViewInit {

//   // employeeList: Array<employeeList> = []













//   displayedColumns: string[] = ['fullName', 'gender', 'bloodGroup', 'dob', 'maritalStatus', 'reliegion', 'fatherorHusbandName', 'dateofMarriage', 'mobileNo', 'email'];
//   dataSource: MatTableDataSource<UserData>;
  

//   @ViewChild(MatPaginator)
//   paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   constructor(private employeeApiService: EmployeeServiceService) { 
//     // Create 100 users
//     const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

//     // Assign the data to the data source for the table to render
//     this.dataSource = new MatTableDataSource(users);
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//     this.getProductCategoryList();

//   }

//   // ngOnInit() { 
//   //   this.getProductCategoryList();
//   // }

//   getProductCategoryList() {
//     this.employeeApiService.getEmpWithId().subscribe(res => {
//       // you will gte your data here
//       this.dataSource = res;
//       // this.dtTrigger.next(null);
//       console.log(res);
//     })
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// }

// /** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }


import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmployeeServiceService } from '../employee/employee-service/employee-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-layout-table',
  templateUrl: './layout-table.component.html',
  styleUrls: ['./layout-table.component.scss'],
  // standalone: true,
  // imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})
export class LayoutTableComponent implements AfterViewInit {


  displayedColumns: string[] = ['fullName', 'gender', 'bloodGroup', 'dob', 'maritalStatus', 'reliegion', 'fatherorHusbandName', 'dateofMarriage', 'mobileNo', 'email'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private employeeApiService: EmployeeServiceService) {
    this.dataSource = new MatTableDataSource();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getProductCategoryList();
  }

  getProductCategoryList() {
    this.employeeApiService.getEmpWithId().subscribe(res => {
      this.dataSource.data = res; // Assign data to dataSource
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
