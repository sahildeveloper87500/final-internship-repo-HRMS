import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent {
  validationForm!: FormGroup;
  instituteName: any;
  MajorName: any;
  yearName: any;
  startDate: any;
  endDate: any;
  levelName: any;
  GPAName: any;
  Description: any;

  constructor() {
    this.validationForm = new FormGroup({
      levelName: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'change',
      }),
      instituteName: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'change',
      }),
      MajorName: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'change',
      }),
      yearName: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'change',
      }),
      GPAName: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'change',
      }),
      startDate: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'change',
      }),
      endDate: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'change',
      }),
      Description: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'change',
      }),
    });
  }

  get levelNameControl(): AbstractControl {
    return this.validationForm.get('levelName')!;
  }

  get instituteNameControl(): AbstractControl {
    return this.validationForm.get('instituteName')!;
  }

  get MajorNameControl(): AbstractControl {
    return this.validationForm.get('MajorName')!;
  }

  get yearNameControl(): AbstractControl {
    return this.validationForm.get('yearName')!;
  }
  get GPANameControl(): AbstractControl {
    return this.validationForm.get('GPAName')!;
  }
  get startDateControl(): AbstractControl {
    return this.validationForm.get('startDate')!;
  }
  get endDateControl(): AbstractControl {
    return this.validationForm.get('endDate')!;
  }
  get DescriptionControl(): AbstractControl {
    return this.validationForm.get('Description')!;
  }
  onSubmit(): void {
    this.validationForm.markAllAsTouched();
  }

  AttendanceEmployee = [
    { id: '1', punch_in: 'BTECH' },
    { id: '2', punch_in: 'MTECH' },
    { id: '3', punch_in: 'MBBS' },
    { id: '4', punch_in: 'MCA' },
    { id: '5', punch_in: 'PHD' },
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

