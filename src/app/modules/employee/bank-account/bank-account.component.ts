import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service/employee-service.service';
import { ToastrService } from 'ngx-toastr';
import { empbankList } from 'src/app/shared/models/employeelist';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {
  validationForm!: FormGroup;
  showForm: boolean = false;

  empbankList: Array<empbankList> = [];
  bankAccountId: string | null = null;

  constructor(private employeeService: EmployeeServiceService, private toastr: ToastrService) {
    this.validationForm = new FormGroup({
      BankName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      IfscCode: new FormControl(null, { validators: [Validators.required, Validators.maxLength(11), Validators.pattern("^[A-Za-z0-9]+$")], updateOn: 'change' }),
      AccountNo: new FormControl(null, { validators: [Validators.required, Validators.maxLength(17), Validators.pattern("^[0-9]+$")], updateOn: 'change' }),
      AccountHolderName: new FormControl(null, { validators: [Validators.required, Validators.maxLength(35), Validators.pattern("^[A-Za-z. ]+$")], updateOn: 'change' }),
      BranchName: new FormControl(null, { validators: [Validators.required, Validators.maxLength(25), Validators.pattern("^[A-Za-z ]+$")], updateOn: 'change' }),
      BankLocation: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      Attachment: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),

    });
  }

  get BankName(): AbstractControl {
    return this.validationForm.get('BankName')!;
  }
  get IfscCode(): AbstractControl {
    return this.validationForm.get('IfscCode')!;
  }
  get AccountNo(): AbstractControl {
    return this.validationForm.get('AccountNo')!;
  }
  get AccountHolderName(): AbstractControl {
    return this.validationForm.get('AccountHolderName')!;
  }
  get BranchName(): AbstractControl {
    return this.validationForm.get('BranchName')!;
  }
  get BankLocation(): AbstractControl {
    return this.validationForm.get('BankLocation')!;
  }
  get Attachment(): AbstractControl {
    return this.validationForm.get('Attachment')!;
  }

  onSubmit(validationForm: FormGroup): void {
    this.validationForm.markAllAsTouched();
    console.log(validationForm.value)
    if (validationForm.valid) {
      this.saveBankDetails()

    }
    else {
      this.toastr.error('Please fill all details');
    }

  }

  ngOnInit(): void {
    this.getBankList();
  }

  saveBankDetails() {
    const bankDetails = {
      createdBy: "1",
      bankName: this.validationForm.value.BankName.trim(),
      ifscCode: this.validationForm.value.IfscCode.trim(),
      accountNo: this.validationForm.value.AccountNo.trim(),
      accountHolderName: this.validationForm.value.AccountHolderName.trim(),
      branchName: this.validationForm.value.BranchName.trim(),
      bankLocation: this.validationForm.value.BankLocation.trim(),
      attachment: this.validationForm.value.Attachment.trim(),
    };
    this.employeeService.saveEmpBankDetail(bankDetails).subscribe(
      () => {
        this.toastr.success('Bank added');
        this.validationForm.reset()

      },
      (error) => {
        console.error(error);
        this.toastr.error('Something went wrong while saving the Bank details');
      }
    );
  }

    //Bank Dropdown/
    getBankList() {
      this.employeeService.getAllEployeeBank()
        .subscribe(res => {
          this.empbankList = res;
        })
    }
    handleBankInput(event: any) {
      const deptId = event.target.value;
      // console.log(typeof (deptId))
    }
    ////////////////////////////////////////////
}