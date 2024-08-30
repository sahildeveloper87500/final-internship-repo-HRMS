import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../service/master.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { roleList } from 'src/app/shared/models/employeelist';
import { worktypeList } from 'src/app/shared/models/master';

@Component({
  selector: 'app-work-type',
  templateUrl: './work-type.component.html',
  styleUrls: ['./work-type.component.scss']
})
export class WorkTypeComponent implements AfterViewInit {

  createdOn: string = '';
  validationForm!: FormGroup;
  workTypeId!: string;
  workTypeName: string = '';
  worktypeList: worktypeList[] = [];
  displayedColumns: string[] = ['workTypeId', 'workTypeName', 'createdBy', 'createdOn', 'updatedBy', 'updatedOn', 'isActive', 'actions'];
  dataSource: MatTableDataSource<worktypeList>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private worktypeService: MasterService, private toastr: ToastrService) {
    this.dataSource = new MatTableDataSource<worktypeList>();
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
      this.saveworktypedata();
    }
    else {
      this.toastr.error("Please filled Details")
    }
  }
  saveworktypedata() {
    const currentDate = new Date().toISOString();
    const worktypeDetails = {
      workTypeName: this.workTypeName.trim(),
      createdBy: "Ganesh",
      isActive: true,
      createdOn: currentDate
    };
    this.worktypeService.saveWorkTypeDetail(worktypeDetails).subscribe(
      () => {
        this.getWorkTypeList();
        this.toastr.success("Work Type save successfully");
        this.showTabs = false;
        this.workTypeName = '';
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Work Type data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Work Type details");
        }
      }
    );
  }
  showTabs: boolean = false;
  toggleTabs() {
    this.showTabs = !this.showTabs;
    this.workTypeName = '';
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  /////////////**********Edit Popup********//////////////

  showEdits: boolean = false;
  toggleEdit(deptId: any) {
    this.showEdits = !this.showEdits;
    let obj: any = {}
    obj = this.worktypeList.find((ele) => { return ele.workTypeId == parseInt(deptId) });
    this.workTypeName = obj.workTypeName.trim();
    this.workTypeId = obj.workTypeId;
    this.createdOn = obj.createdOn;
  }
  preventCloses(event: MouseEvent) {
    event.stopPropagation();
  }
  closeFunction() {
    this.showEdits = !this.showEdits;
    this.workTypeName = '';
  }
  editworktypedata(): void {
    const currentDate = new Date().toISOString();
    const worktypeDetails = {
      workTypeName: this.workTypeName,
      createdBy: "Ganesh",
      updatedBy: "Ganesh",
      isActive: true,
      updatedOn: currentDate,
      createdOn: this.createdOn
    };
    this.worktypeService.editWorkTypeDetail(worktypeDetails, this.workTypeId).subscribe(
      () => {
        this.getWorkTypeList();
        this.toastr.success("Work Type Updated");
        this.showEdits = false;
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Work Type data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Work Type details");
        }
      }
    );
  }

  /////////////////////////////////////////////////////////////////

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getWorkTypeList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getWorkTypeList() {
    this.worktypeService.getWorkTypeWithId().subscribe(res => {
      this.worktypeList = res;
      this.dataSource.data = this.worktypeList;
    });
  }
}
