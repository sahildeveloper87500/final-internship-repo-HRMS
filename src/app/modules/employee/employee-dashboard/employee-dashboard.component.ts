import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { employeeList } from 'src/app/shared/models/employeelist';
import { EmployeeServiceService } from 'src/app/modules/employee/employee-service/employee-service.service'
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent {
  categoryGroup: Array<employeeList> = [];
  showOptions: boolean[] = [];
  defaultImage: string = 'assets/img/profile.png';
  dataSource: any;
  toggleOptions(index: number) {
    // Toggle the showOptions property for the clicked item
    this.showOptions[index] = !this.showOptions[index];
  }

  //constructor(private EmployeeServiceService: EmployeeServiceService) { }
  constructor(private EmployeeServiceService: EmployeeServiceService,
    private router: Router) { }

  ngOnInit() { 
    this.getEmployeeList(); 
  }

  
  getEmployeeList() {
    this.EmployeeServiceService.getListEmployee().subscribe(
      (res) => {
        this.categoryGroup = res;
        this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    );
  } 
  sendItem(item: any) { 
    this.router.navigate(['../main/employee/profile'], { queryParams: { empid:item}});
  } 

  getImageURL(imageFileName: string): string {
    if (imageFileName && typeof imageFileName !== 'string') {
      return `assets/img/${imageFileName}`;
    } else {
      return this.defaultImage;
  }
  }
}


