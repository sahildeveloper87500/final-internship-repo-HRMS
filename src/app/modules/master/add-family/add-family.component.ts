import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { MasterService } from '../service/master.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { familyList } from 'src/app/shared/models/master';

@Component({
  selector: 'app-add-family',
  templateUrl: './add-family.component.html',
  styleUrls: ['./add-family.component.scss']
})
export class AddFamilyComponent implements AfterViewInit {

  createdOn: string = '';
  validationForm!: FormGroup;
  familyId!: string;
  familyName: string = '';
  familyList: familyList[] = [];
  displayedColumns: string[] = ['familyId', 'familyName', 'createdBy', 'createdOn', 'updatedBy', 'updatedOn', 'isActive', 'actions'];
  dataSource: MatTableDataSource<familyList>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private familyService: MasterService, private toastr: ToastrService) {
    this.dataSource = new MatTableDataSource<familyList>();
    this.validationForm = new FormGroup({
      deptName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    });
  }
  get deptName(): AbstractControl {
    return this.validationForm.get('deptName')!;
  }

  onSubmit(form: FormGroup): void {
    this.validationForm.markAllAsTouched();
    if (form.valid) {
      this.savefamilydata();
    }
    else {
      this.toastr.error("Please filled Details")
    }
  }
  savefamilydata() {
    const currentDate = new Date().toISOString();
    const familyDetails = {
      familyName: this.familyName.trim(),
      createdBy: "Ganesh",
      isActive: true,
      createdOn: currentDate
    };
    this.familyService.saveFamilyDetail(familyDetails).subscribe(
      () => {
        this.getFamilyList();
        this.toastr.success("Family save successfully");
        this.showTabs = false;
        this.familyName = '';
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Family data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Family details");
        }
      }
    );
  }
  showTabs: boolean = false;
  toggleTabs() {
    this.showTabs = !this.showTabs;
    this.familyName = '';
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  /////////////**********Edit Popup********//////////////

  showEdits: boolean = false;
  toggleEdit(deptId: any) {
    this.showEdits = !this.showEdits;
    let obj: any = {}
    obj = this.familyList.find((ele) => { return ele.familyId == parseInt(deptId) });
    this.familyName = obj.familyName.trim();
    this.familyId = obj.familyId;
    this.createdOn = obj.createdOn;
  }
  preventCloses(event: MouseEvent) {
    event.stopPropagation();
  }
  closeFunction() {
    this.showEdits = !this.showEdits;
    this.familyName = '';
  }
  editfamilydata(): void {
    const currentDate = new Date().toISOString();
    const familyDetails = {
      familyName: this.familyName,
      createdBy: "Ganesh",
      updatedBy: "Ganesh",
      isActive: true,
      updatedOn: currentDate,
      createdOn: this.createdOn
    };
    this.familyService.editFamilyDetail(familyDetails, this.familyId).subscribe(
      () => {
        this.getFamilyList();
        this.toastr.success("Family Updated");
        this.showEdits = false;
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Family data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Family details");
        }
      }
    );
  }

  /////////////////////////////////////////////////////////////////

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getFamilyList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getFamilyList() {
    this.familyService.getFamilyWithId().subscribe(res => {
      this.familyList = res;
      this.dataSource.data = this.familyList;
    });
  }
}