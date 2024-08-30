import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service/employee-service.service'; 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  empid: any
  constructor(private EmployeeServiceService: EmployeeServiceService,
    private route: ActivatedRoute,
    //private ContactServiceService :ContactservService,
    //private AddressServiceService :AddressserviceService
  ) { }

  ngOnInit() {
    // Retrieve the empid from the query parameters
    this.route.queryParams.subscribe(params => {
      this.empid = params['empid'];
      this.getEmployeeListById(this.empid);
      this.getContactListById(this.empid);
      this.getAddressListById(this.empid)
      this.getEducationListById(this.empid)
      this.getIdentityListById(this.empid)
      this.getJobListById(this.empid)
      this.getDepartmentListById(this.empid)
      this.getDesignationListById(this.empid)

      // Now you have the empid available for use in this component
    });

  }

  personal: any;
  contact: any;
  address: any;
  education: any;
  identity: any;
  job: any;
  department: any;
  designation: any;
  getEmployeeListById(empid: any) {
    // console.log("h1",empid);
    this.EmployeeServiceService.getEmpById(empid).subscribe(


      (res) => {

        this.personal = res;
        // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    )

    // console.log(this.personal.fullName)
  }


  getContactListById(empid: any) {
    // console.log("h3",empid);
    this.EmployeeServiceService.getContactById(empid).subscribe(


      (res) => {
        this.contact = res;
        // console.log("resfor id one contact",this.contact)
        // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    )

  }

  getAddressListById(empid: any) {
    // console.log("h3",empid);
    this.EmployeeServiceService.getAddressById(empid).subscribe(


      (res) => {
        // console.log("dcjn");
        this.address = res;
        // console.log("resfor id one address",this.address)
        // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
        console.error(error);
      }
    )
  }

   
  getDesignationListById(empid :any) {
    // console.log("h1",empid);
      this.EmployeeServiceService.getDesignationById(empid).subscribe(
     
  
        (res) => {
         
          this.designation =  res;
          // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
          console.error(error);
      }
      )
  
      // console.log(this.education)
    }
  getDepartmentListById(empid :any) {
    // console.log("h1",empid);
      this.EmployeeServiceService.getDepartmentById(empid).subscribe(
     
  
        (res) => {
         
          this.department =  res;
          // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
          console.error(error);
      }
      )
  
      // console.log(this.education)
    }
  getJobListById(empid :any) {
    // console.log("h1",empid);
      this.EmployeeServiceService.getJobById(empid).subscribe(
     
  
        (res) => {
         
          this.job =  res;
          // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
          console.error(error);
      }
      )
  
      // console.log(this.education)
    }
  
   getIdentityListById(empid :any) {
    // console.log("h1",empid);
      this.EmployeeServiceService.getIdentityById(empid).subscribe(
     
  
        (res) => {
         
          this.identity =  res;
          // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
          console.error(error);
      }
      )
  
      // console.log(this.education)
    }
  
  
  getEducationListById(empid :any) {
    // console.log("h1",empid);
      this.EmployeeServiceService.getEducationById(empid).subscribe(
     
  
        (res) => {
         
          this.education = res;
          // this.showOptions = res.map(() => false); // Initialize showOptions for each item
      },
      (error) => {
          console.error(error);
      }
      )
  
      // console.log(this.education)
  }
  formatDate(dateString: string): string {
    if (!dateString) return "na";    
    // Extracting date part only
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');  
    return `${year}-${month}-${day}`;
  }
}