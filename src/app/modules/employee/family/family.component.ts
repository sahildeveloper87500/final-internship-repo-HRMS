import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
  validationForm!: FormGroup;

  constructor(private employeeService: EmployeeServiceService, private toastr: ToastrService) {
    this.validationForm = new FormGroup({
      Relation: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Name: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(25), Validators.pattern("^[a-zA-Z ]*$")], updateOn: 'change' }),
      DateOfBirth: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      ContactNo: new FormControl(null, { validators: [Validators.required, Validators.pattern("^[0-9]{10}$")], updateOn: 'change' }),

    });
  }

  get Relation(): AbstractControl {
    return this.validationForm.get('Relation')!;
  }
  get Name(): AbstractControl {
    return this.validationForm.get('Name')!;
  }
  get DateOfBirth(): AbstractControl {
    return this.validationForm.get('DateOfBirth')!;
  }
  get ContactNo(): AbstractControl {
    return this.validationForm.get('ContactNo')!;
  }

  onSubmit(validationForm: FormGroup): void {
    this.validationForm.markAllAsTouched();
    console.log(validationForm.value)
    if (validationForm.valid) {
      this.saveFamilydata()

    }
    else {
      this.toastr.error('Please fill all details');
    }
  }

  ngOnInit(): void {
  }
  saveFamilydata() {

    const familyDetails = {
      createdBy: "1",
      // updatedBy: "1",
      relation: this.validationForm.value.Relation,
      name: this.validationForm.value.Name.trim(),
      dateOfBirth: this.validationForm.value.DateOfBirth,
      contactNo: this.validationForm.value.ContactNo.trim(),
    };

    this.employeeService.saveEmpFamilyDetail(familyDetails).subscribe(
      () => {
        this.toastr.success('Family added');
        this.validationForm.reset()
        this.validationForm.get('dateOfBirth')?.setValue('')
      },
      (error) => {
        console.error(error);
        this.toastr.error('Something went wrong while saving the Family details');
      }
    );
  }
}
