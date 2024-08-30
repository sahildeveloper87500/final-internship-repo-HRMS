import { Component } from '@angular/core';
import { EmployeeServiceService } from './../../employee/employee-service/employee-service.service';
import { departmentList } from 'src/app/shared/models/employeelist';
import { designationList } from 'src/app/shared/models/employeelist';
import { roleList } from 'src/app/shared/models/employeelist';
import { workShiftList } from 'src/app/shared/models/employeelist';
import { officeList } from 'src/app/shared/models/employeelist';
import { Subject } from 'rxjs';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})


export class EmploymentComponent {

  addEmployeeForm: FormGroup;
  addLoginDetailsForm: FormGroup;

  date = new Date()
  showForm: boolean = false;
  enableEmployeeID: boolean = false;
  departmentList: Array<departmentList> = []
  roleList: Array<roleList> = []
  workShiftList: Array<workShiftList> = []
  officeList: Array<officeList> = []
  designationList: Array<designationList> = []
  dtTrigger: Subject<any> = new Subject<any>();
  //   officeLocation: '',
  //   employeeStatus: '',
  //   probationEndDate: this.date,
  //   doPermanency: this.date,
  //   department: '',
  //   designation: '',
  //   supervisor: '',
  //   employeeId: false,
  //   role: '',
  //   shift: '',
  //   workType: '',
  //   loginDetails: {
  //     username: '',
  //     status: true,
  //     password: '',
  //     confirmPassword: '',
  //     essRole: '',
  //     supervisorRole: '',
  //     adminRole: ''
  //   }
  // };

  deptInputVal: String | null = null;

  constructor(private employeeApiService: EmployeeServiceService) {
    this.addEmployeeForm = new FormGroup({
      officeLocation: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      employeeStatus: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      probEndDate: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      dateOfPermanency: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      department: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      designation: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      supervisor: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      employeeId: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      role: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      workShift: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      workType: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    });

    this.addLoginDetailsForm = new FormGroup({
      username: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      password: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      confirmPassword: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      essRole: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      supRole: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      adminRole: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    })
  }

  ngOnInit() {
    this.getDepartmentList()
    this.getRoleList()
    this.getWorkShiftList()
    this.getOfficeList()
  }

  toggleForm(event: Event) {
    this.showForm = (event.target as HTMLInputElement).checked;
  }

  validateConfirmPassword(addLoginDetailsForm: FormGroup) {
    if (addLoginDetailsForm.value.password !== addLoginDetailsForm.value.confirmPassword || addLoginDetailsForm.value.confirmPassword === '') {
      addLoginDetailsForm.controls['confirmPassword'].setErrors({ mustMatch: true, require: true });
      return;
    } else {
      addLoginDetailsForm.controls['confirmPassword'].setErrors(null);
    }
  }

  //#region Add Employee Form Getters
  get officeLocation(): AbstractControl {
    return this.addEmployeeForm.get('officeLocation')!;
  }
  get employeeStatus(): AbstractControl {
    return this.addEmployeeForm.get('employeeStatus')!;
  }
  get probEndDate(): AbstractControl {
    return this.addEmployeeForm.get('probEndDate')!;
  }
  get dateOfPermanency(): AbstractControl {
    return this.addEmployeeForm.get('dateOfPermanency')!;
  }
  get department(): AbstractControl {
    return this.addEmployeeForm.get('department')!;
  }
  get designation(): AbstractControl {
    return this.addEmployeeForm.get('designation')!;
  }
  get supervisor(): AbstractControl {
    return this.addEmployeeForm.get('supervisor')!;
  }
  get employeeId(): AbstractControl {
    return this.addEmployeeForm.get('employeeId')!;
  }
  get role(): AbstractControl {
    return this.addEmployeeForm.get('role')!;
  }
  get workShift(): AbstractControl {
    return this.addEmployeeForm.get('workShift')!;
  }
  get workType(): AbstractControl {
    return this.addEmployeeForm.get('workType')!;
  }
  //#endregion

  //#region Add Login Detail Getters
  get username(): AbstractControl {
    return this.addLoginDetailsForm.get('username')!;
  }
  get password(): AbstractControl {
    return this.addLoginDetailsForm.get('password')!;
  }
  get confirmPassword(): AbstractControl {
    return this.addLoginDetailsForm.get('confirmPassword')!;
  }
  get essRole(): AbstractControl {
    return this.addLoginDetailsForm.get('essRole')!;
  }
  get supRole(): AbstractControl {
    return this.addLoginDetailsForm.get('supRole')!;
  }
  get adminRole(): AbstractControl {
    return this.addLoginDetailsForm.get('adminRole')!;
  }
  //#endregion

  //#region GET ALL DEPARTMENTS : added by Vaibhav : 04/03/2024
  getDepartmentList() {
    this.employeeApiService.getAllDepartments('Department')
      .subscribe(res => {
        this.departmentList = res
        this.dtTrigger.next(null);
        // console.log(this.departmentList);
      })
  }
  //#endregion

  //#region GET ALL ROLES : added by Vaibhav : 11/03/2024
  getRoleList() {
    this.employeeApiService.getAllRoles('Role')
      .subscribe(res => {
        this.roleList = res
        this.dtTrigger.next(null);
      })
  }
  //#endregion

  //#region GET ALL ROLES : added by Vaibhav : 11/03/2024
  getWorkShiftList() {
    this.employeeApiService.getAllWorkShifts('WorkShift')
      .subscribe(res => {
        this.workShiftList = res
        this.dtTrigger.next(null);
      })
  }
  //#endregion

  //#region GET ALL DESIGNATIONS BY DEPARTMENT ID
  getDesignationList(deptId: any) {
    this.employeeApiService.getAllDesig('Designation')
      .subscribe(res => {
        this.designationList = res.filter((desig) => this.filterDesig(desig, parseInt(deptId)))
        this.dtTrigger.next(null);
        // console.log(res.filter((desig) => this.filterDesig(desig, deptId)));
      })
  }

  //#region GET ALL OFFICES
  getOfficeList() {
    this.employeeApiService.getAllOffices('Office')
      .subscribe(res => {
        this.officeList = res
        this.dtTrigger.next(null);
        // console.log(this.officeList);
      })
  }

  // FUNCTION TO FILTER DESIGNATIONS
  filterDesig(desig: any, deptId: any) {
    console.log(desig.deptId == deptId)
    return desig.deptId == deptId
  }

  // FUNCTION TO GET DEPT ID WHEN DEPARTMENT IS SELECTED
  handleDeptInput(event: any) {
    const deptId = event.target.value;
    this.deptInputVal = deptId
    this.getDesignationList(deptId)
  }
  //#endregion

  //#region HANDLE SAVE BUTTON CLICK
  handleSaveBtn(addEmployeeForm: FormGroup) {
    addEmployeeForm.markAllAsTouched()
    if (addEmployeeForm.valid) {
      const form : any = {
        officeLocation: addEmployeeForm.value.officeLocation,
        probationEndDate: addEmployeeForm.value.probEndDate,
        dateofPermanecy: addEmployeeForm.value.dateOfPermanency,
        department: addEmployeeForm.value.department,
        designation: addEmployeeForm.value.designation,
        supervisor: addEmployeeForm.value.supervisor,
        employeeId: addEmployeeForm.value.employeeId,
        role: addEmployeeForm.value.role,
        workShift: addEmployeeForm.value.workShift,
        workType: addEmployeeForm.value.workType
      }

      console.log({
        formObj : form
      })

      this.employeeApiService.saveAddEmployeeForm(form).subscribe((res)=>{
            alert('Form submitted successfully')
        })
    } else {

    }
  }
 //#endregion

}