import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit{
  validationForm!: FormGroup;

constructor(private employeeService: EmployeeServiceService , private toastr: ToastrService) {
  this.validationForm = new FormGroup({
    AadhaarNo: new FormControl(null, { validators: [Validators.required, Validators.maxLength(12), Validators.pattern("^[0-9]*$")], updateOn: 'change' }),
    NameAsAadhaar: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(25), Validators.pattern("^[a-zA-Z ]*$")], updateOn: 'change' }),
    DobAsAadhaar: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    AadhaarAttach: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    PanNo: new FormControl(null, { validators: [Validators.required, Validators.maxLength(10)], updateOn: 'change' }),
    NameAsPan: new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(25), Validators.pattern("^[a-zA-Z ]*$")], updateOn: 'change' }),
    DobAsPan: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    PanAttach: new FormControl(null, { validators: Validators.required, updateOn: 'change' }), 
    PassportNo: new FormControl(null, { validators: [Validators.required, Validators.maxLength(12)], updateOn: 'change' }),
    PassportType: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    PassportVaildTill: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    PassportAttach: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),      
    DlNo: new FormControl(null, { validators: [Validators.required, Validators.maxLength(16)], updateOn: 'change' }),      
    DlVaildTill: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),      
    DobAsDL: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),      
    DlAttach: new FormControl(null, { validators: Validators.required, updateOn: 'change' }), 
  });
 }

 get AadhaarNo(): AbstractControl {
  return this.validationForm.get('AadhaarNo')!;
}
get NameAsAadhaar(): AbstractControl {
  return this.validationForm.get('NameAsAadhaar')!;
}
 get DobAsAadhaar(): AbstractControl {
  return this.validationForm.get('DobAsAadhaar')!;
} 
get AadhaarAttach(): AbstractControl {
  return this.validationForm.get('AadhaarAttach')!;
} 
get PanNo(): AbstractControl {
  return this.validationForm.get('PanNo')!;
} 
get NameAsPan(): AbstractControl {
  return this.validationForm.get('NameAsPan')!;
} 
get DobAsPan(): AbstractControl {
  return this.validationForm.get('DobAsPan')!;
} 
get PanAttach(): AbstractControl {
  return this.validationForm.get('PanAttach')!;
} 
get PassportNo(): AbstractControl {
  return this.validationForm.get('PassportNo')!;
} 
get PassportType(): AbstractControl {
  return this.validationForm.get('PassportType')!;
} 
get PassportVaildTill(): AbstractControl {
  return this.validationForm.get('PassportVaildTill')!;
}
get PassportAttach(): AbstractControl {
  return this.validationForm.get('PassportAttach')!;
}
get DlNo(): AbstractControl {
  return this.validationForm.get('DlNo')!;
}
get DlVaildTill(): AbstractControl {
  return this.validationForm.get('DlVaildTill')!;
}
get DobAsDL(): AbstractControl {
  return this.validationForm.get('DobAsDL')!;
}
get DlAttach(): AbstractControl {
  return this.validationForm.get('DlAttach')!;
}
selectedFile: File | null = null; // Property to store the selected file

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0] as File;
}

getObjectURL(file: File): string {
  if (file) {
    return URL.createObjectURL(file);
  }
return'';
}



onSubmit(validationForm:FormGroup): void {
  this.validationForm.markAllAsTouched();
  console.log(validationForm.value)
  if(validationForm.valid){
    this.saveIdentitydata()
    
  }
  else{
    this.toastr.error('Please fill all details');
  }
  
}

ngOnInit(): void {
}

saveIdentitydata() {
 
  const identityDetails = {
    createdBy: "1",
    // updatedBy: "1",
    aadhaarNo: this.validationForm.value.AadhaarNo,
    nameAsAadhaar: this.validationForm.value.NameAsAadhaar,
    dobAsAadhaar: this.validationForm.value.DobAsAadhaar,
    aadhaarAttach: this.validationForm.value.AadhaarAttach,
    panNo: this.validationForm.value.PanNo,
    nameAsPan: this.validationForm.value.NameAsPan,
    dobAsPan: this.validationForm.value.DobAsPan,
    panAttach: this.validationForm.value.PanAttach,
    passportNo: this.validationForm.value.PassportNo,
    passportType: this.validationForm.value.PassportType,
    passportVaildTill: this.validationForm.value.PassportVaildTill,
    passportAttach: this.validationForm.value.PassportAttach,      
    dlNo: this.validationForm.value.DlNo,      
    dlVaildTill: this.validationForm.value.DlVaildTill,      
    dobAsDL: this.validationForm.value.DobAsDL,      
    dlAttach: this.validationForm.value.DlAttach,      
  };  

  this.employeeService.saveEmpIdentityDetail(identityDetails).subscribe(
  () => {
    this.toastr.success('Identity added');
    this.validationForm.reset()
    this.validationForm.get('DobAsAadhaar')?.setValue('')
    this.validationForm.get('DobAsPan')?.setValue('')
    this.validationForm.get('PassportVaildTill')?.setValue('')
    this.validationForm.get('DlVaildTill')?.setValue('')
    this.validationForm.get('DobAsDL')?.setValue('')


  },
  (error) => {
    console.error(error);
    this.toastr.error('Something went wrong while saving the Identity details');

 }
 );
}
}