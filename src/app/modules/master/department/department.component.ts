import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, Subscription, interval, take } from 'rxjs';
import { departmentList } from 'src/app/shared/models/master';
import { MasterService } from '../service/master.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements AfterViewInit {

  createdOn: string = '';
  validationForm!: FormGroup;
  departmentId!: string;
  departmentName: string = '';
  departmentList: departmentList[] = [];
  displayedColumns: string[] = ['deptId', 'departmentName', 'createdBy', 'createdOn', 'updatedBy', 'updatedOn', 'isActive', 'actions'];
  dataSource: MatTableDataSource<departmentList>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private departmentService: MasterService, private toastr: ToastrService) {
    this.dataSource = new MatTableDataSource<departmentList>();
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
      this.savedepartmentdata();
    }
    else {
      this.toastr.error("Please filled Details")
    }
  }
  savedepartmentdata() {
    const currentDate = new Date().toISOString();
    const deptDetails = {
      departmentName: this.departmentName.trim(),
      createdBy: "Ganesh",
      isActive: true,
      createdOn: currentDate
    };
    this.departmentService.saveDepartmentDetail(deptDetails).subscribe(
      () => {
        this.getDepartmentList();
        this.toastr.success("Department save successfully");
        this.showTabs = false;
        this.departmentName = '';
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Department data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Department details");
        }
      }
    );
  }
  showTabs: boolean = false;
  toggleTabs() {
    this.showTabs = !this.showTabs;
    this.departmentName = '';
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  /////////////**********Edit Popup********//////////////

  showEdits: boolean = false;
  toggleEdit(deptId: any) {
    this.showEdits = !this.showEdits;
    let obj: any = {}
    obj = this.departmentList.find((ele) => { return ele.deptId == parseInt(deptId) });
    this.departmentName = obj.departmentName.trim();
    this.departmentId = obj.deptId;
    this.createdOn = obj.createdOn;
  }
  preventCloses(event: MouseEvent) {
    event.stopPropagation();
  }
  closeFunction() {
    this.showEdits = !this.showEdits;
  }
  editdepartmentdata(): void {
    const currentDate = new Date().toISOString();
    const deptDetails = {
      departmentName: this.departmentName,
      createdBy: "Ganesh",
      updatedBy: "Ganesh",
      isActive: true,
      updatedOn: currentDate,
      createdOn: this.createdOn
    };
    this.departmentService.editDepartmentDetail(deptDetails, this.departmentId).subscribe(
      () => {
        this.getDepartmentList();
        this.toastr.success("Department Updated");
        this.showEdits = false;
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Department data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Department details");
        }      }
    );
  }

  /////////////////////////////////////////////////////////////////


  deleteDepartment(departmentId: any): void {
    if (confirm("Are you sure you want to delete this department?")) {
      this.departmentService.deleteDepartment(departmentId).subscribe(
        () => {
          this.toastr.success("Department deleted successfully");
          this.getDepartmentList(); // Update the table data
        },
        (error) => {
          console.error(error);
          this.toastr.error("Something went wrong while deleting the department");
        }
      );
    }
  }
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getDepartmentList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getDepartmentList() {
    this.departmentService.getDeptWithId().subscribe(res => {
      this.departmentList = res;
      this.dataSource.data = this.departmentList;
    });
  }
}