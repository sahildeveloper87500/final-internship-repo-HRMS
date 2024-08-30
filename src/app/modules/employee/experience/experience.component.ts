import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  validationForm!: FormGroup;
  titleName: any;
  startDate: any;
  endDate: any;
  companyName: any;
  Description: any;
  uploadFile: any;

  constructor() {
    this.validationForm = new FormGroup({
      companyName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      titleName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Description: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      startDate: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      endDate: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      uploadFile: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    });
  }

  get companyNameControl(): AbstractControl {
    return this.validationForm.get('companyName')!;
  }

  get titleNameControl(): AbstractControl {
    return this.validationForm.get('titleName')!;
  }
  get DescriptionControl(): AbstractControl {
    return this.validationForm.get('description')!;
  }
  get startDateControl(): AbstractControl {
    return this.validationForm.get('startDate')!;
  }
  get endDateControl(): AbstractControl {
    return this.validationForm.get('endDate')!;
  }
  get uploadFileControl(): AbstractControl {
    return this.validationForm.get('uploadFile')!;
  }

  onSubmit(): void {
    this.validationForm.markAllAsTouched();
  }

  AttendanceEmployee = [
    { id: '1', punch_in: 'Google' },
    { id: '2', punch_in: 'Amzon' },
    { id: '3', punch_in: 'IBM' },
    { id: '4', punch_in: 'Apple' },
    { id: '5', punch_in: 'RedHat' },
  ];

  showTabs: boolean = false;
  clicked: boolean = false;
  departmentName: any;

  toggleTabs() {
    this.showTabs = !this.showTabs;
  }

  addDepartment() {
    this.clicked = true;
  }

  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  departmentForm!: FormGroup;
  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
  