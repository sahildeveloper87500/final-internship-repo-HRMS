import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  validationForm!: FormGroup;

  constructor(private employeeService: EmployeeServiceService , private toastr: ToastrService) {
    this.validationForm = new FormGroup({
      MobileNo: new FormControl(null, { validators: [Validators.required, Validators.pattern("^[0-9]{10}$")], updateOn: 'change' }),
      AlternateMobile: new FormControl(null, { validators: [Validators.required, Validators.pattern("^[0-9]{10}$")], updateOn: 'change' }),
      PersonalEmailId: new FormControl(null, { validators: [Validators.required, Validators.email], updateOn: 'change' }),
      ProfessionalEmailId: new FormControl(null, { validators: [Validators.required, Validators.email], updateOn: 'change' }),
      HomeTelephone: new FormControl(null, { validators: [Validators.required, Validators.pattern("^[0-9]{10}$")], updateOn: 'change' }),
      EmergencyContactPersonName: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(25), Validators.pattern("^[a-zA-Z ]*$")], updateOn: 'change' }),
      RelationshipWithContactPerson: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      ContactPersonNumber: new FormControl(null, { validators: [Validators.required, Validators.pattern("^[0-9]{10}$")], updateOn: 'change' }), 
      ContactPersonAddress: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)], updateOn: 'change' }),
      AlternateEmergencyContactPersonName: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(25), Validators.pattern("^[a-zA-Z ]*$")], updateOn: 'change' }),
      AlternateRelationshipWithContactPerson: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      AlternateContactPersonNumber: new FormControl(null, { validators: [Validators.required, Validators.pattern("^[0-9]{10}$")], updateOn: 'change' }),
      AlternateContactPersonAddress: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(50)], updateOn: 'change' }),

      
    });
   }

   get MobileNo(): AbstractControl {
    return this.validationForm.get('MobileNo')!;
  }
  get AlternateMobile(): AbstractControl {
    return this.validationForm.get('AlternateMobile')!;
  }
   get PersonalEmailId(): AbstractControl {
    return this.validationForm.get('PersonalEmailId')!;
  } 
  get ProfessionalEmailId(): AbstractControl {
    return this.validationForm.get('ProfessionalEmailId')!;
  } 
  get HomeTelephone(): AbstractControl {
    return this.validationForm.get('HomeTelephone')!;
  } 
  get EmergencyContactPersonName(): AbstractControl {
    return this.validationForm.get('EmergencyContactPersonName')!;
  } 
  get RelationshipWithContactPerson(): AbstractControl {
    return this.validationForm.get('RelationshipWithContactPerson')!;
  } 
  get ContactPersonNumber(): AbstractControl {
    return this.validationForm.get('ContactPersonNumber')!;
  } 
  get ContactPersonAddress(): AbstractControl {
    return this.validationForm.get('ContactPersonAddress')!;
  } 
  get AlternateEmergencyContactPersonName(): AbstractControl {
    return this.validationForm.get('AlternateEmergencyContactPersonName')!;
  } 
  get AlternateRelationshipWithContactPerson(): AbstractControl {
    return this.validationForm.get('AlternateRelationshipWithContactPerson')!;
  }
  get AlternateContactPersonNumber(): AbstractControl {
    return this.validationForm.get('AlternateContactPersonNumber')!;
  }
  get AlternateContactPersonAddress(): AbstractControl {
    return this.validationForm.get('AlternateContactPersonAddress')!;
  }

  onSubmit(validationForm:FormGroup): void {
    this.validationForm.markAllAsTouched();
    console.log(validationForm.value)
    if(validationForm.valid){
      this.savecontactdata()
      
    }
    else{
      this.toastr.error('Please fill all details');
    }
    
  }

  ngOnInit(): void {
  }


  savecontactdata() {
   
    const contactDetails = {
      createdBy: "1",
      updatedBy: "1",
      mobileNo: this.validationForm.value.MobileNo.trim(),
      alternateMobile: this.validationForm.value.AlternateMobile.trim(),
      personalEmailId: this.validationForm.value.PersonalEmailId.trim(),
      professionalEmailId: this.validationForm.value.ProfessionalEmailId.trim(),
      homeTelephone: this.validationForm.value.HomeTelephone.trim(),
      emergencyContactPersonName: this.validationForm.value.EmergencyContactPersonName.trim(),
      relationshipWithContactPerson: this.validationForm.value.RelationshipWithContactPerson.trim(),
      contactPersonNumber: this.validationForm.value.ContactPersonNumber.trim(),
      contactPersonAddress: this.validationForm.value.ContactPersonAddress.trim(),
      alternateEmergencyContactPersonName: this.validationForm.value.AlternateEmergencyContactPersonName.trim(),
      alternateRelationshipWithContactPerson: this.validationForm.value.AlternateRelationshipWithContactPerson.trim(),
      alternateContactPersonNumber: this.validationForm.value.AlternateContactPersonNumber.trim(),
      alternateContactPersonAddress: this.validationForm.value.AlternateContactPersonAddress.trim(),
      remarks: "",
      empRegId: "1"
    };  

    this.employeeService.saveEmpcontactDetail(contactDetails).subscribe(
    () => {
      this.toastr.success('Contact added');
      this.validationForm.reset()

    },
    (error) => {
      console.error(error);
      this.toastr.error('Something went wrong while saving the contact details');

}
);
}
}