import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {  ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-prosonal-details',
  templateUrl: './prosonal-details.component.html',
  styleUrls: ['./prosonal-details.component.scss']
})
export class ProsonalDetailsComponent implements OnInit {
  validationForm!: FormGroup;
  constructor(private employeeService: EmployeeServiceService, private toastr: ToastrService) { 
    this.validationForm = new FormGroup({
      fullname: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(35), Validators.pattern("^[a-zA-Z ]*$")], updateOn: 'change' }),
      Dob: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Gender: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Bloodgroup: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Religion: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Fatherhusbandname: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(35), Validators.pattern("^[a-zA-Z ]*$")], updateOn: 'change' }),
      Maritalstatus: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Domarriage: new FormControl({ value: null, disabled: true }, Validators.required), // Include validation separately
      Mobilenumber: new FormControl(null, { validators: [Validators.required, Validators.pattern("^[0-9]{10}$")], updateOn: 'change' }),
      Emailid: new FormControl(null, { validators: [Validators.required, Validators.email], updateOn: 'change' }),
    });

    this.validationForm.get('Maritalstatus')?.valueChanges.subscribe(value => {
      const dateOfMarriageControl = this.validationForm.get('Domarriage');
      if (value === '2') { 
        dateOfMarriageControl?.enable();
      } else {
        dateOfMarriageControl?.disable();
        dateOfMarriageControl?.setValue(null);
      }
    });
  }
      
  get fullname(): AbstractControl {
    return this.validationForm.get('fullname')!;
  }
  get Dob(): AbstractControl {
    return this.validationForm.get('Dob')!;
  }
  get Gender(): AbstractControl {
    return this.validationForm.get('Gender')!;
  } 
  get Bloodgroup(): AbstractControl {
    return this.validationForm.get('Bloodgroup')!;
  } 
  get Religion(): AbstractControl {
    return this.validationForm.get('Religion')!;
  } 
  get Fatherhusbandname(): AbstractControl {
    return this.validationForm.get('Fatherhusbandname')!;
  } 
  get Maritalstatus(): AbstractControl {
    return this.validationForm.get('Maritalstatus')!;
  } 
  get Domarriage(): AbstractControl {
    return this.validationForm.get('Domarriage')!;
  } 
  get Mobilenumber(): AbstractControl {
    return this.validationForm.get('Mobilenumber')!;
  } 
  get Emailid(): AbstractControl {
    return this.validationForm.get('Emailid')!;
  }

  onSubmit(validationForm:FormGroup): void {
    this.validationForm.markAllAsTouched();
    console.log(validationForm.value)
    if(validationForm.valid){
      this.saveproductdata()      
    }
    else{
      this.toastr.error('Please fill all details');
    }
  }
  
  ngOnInit(): void {
  }

  saveproductdata() {
    const empDetails = {
      createdBy: "1",
      updatedBy: "1",
      fullName: this.validationForm.value.fullname.trim(),
      dob: this.validationForm.value.Dob.trim(),
      gender: this.validationForm.value.Gender.trim(),
      bloodGroup: this.validationForm.value.Bloodgroup.trim(),
      reliegion: this.validationForm.value.Religion.trim(),
      fatherorHusbandName: this.validationForm.value.Fatherhusbandname.trim(),
      maritalStatus: this.validationForm.value.Maritalstatus.trim(),
      dateofMarriage: this.validationForm.value.Domarriage ? this.validationForm.value.Domarriage.trim() : null,
      mobileNo: this.validationForm.value.Mobilenumber.trim(),
      email: this.validationForm.value.Emailid.trim()
    };

    this.employeeService.saveEmpPersonalDetail(empDetails).subscribe(
      () => {
        this.toastr.success('Employee added');
        this.validationForm.reset()
        this.validationForm.get('Dob')?.setValue('')
      },
      (error) => {
        console.error(error);
        this.toastr.error('Something went wrong while saving the employee details');
      }
    );
  } 
}