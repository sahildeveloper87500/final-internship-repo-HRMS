import { Component } from '@angular/core';
import { EmployeeServiceService } from './../../employee/employee-service/employee-service.service';
import { employeeList } from 'src/app/shared/models/employeelist';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  
  filterName: string='';
 
  employeeList: Array<employeeList> = []
  constructor(private employeeApiService: EmployeeServiceService) {

  }
  dtOptions: DataTables.Settings={}; 
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
  dtTrigger: Subject<any> = new Subject<any>();


  ngOnInit() { 
    this.getProductCategoryList();
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        searchPlaceholder: 'SEARCH'
      }
    };  

  }
  getProductCategoryList() {
    this.employeeApiService.getEmpWithId().subscribe(res => {
      // you will gte your data here
      this.employeeList = res;
      this.dtTrigger.next(null);
      console.log(res);
    })
  }




}

