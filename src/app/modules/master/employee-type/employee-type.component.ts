import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { MasterService } from '../service/master.service';
import { ToastrService } from 'ngx-toastr';
import { empTypeList } from 'src/app/shared/models/master';

@Component({
  selector: 'app-employee-type',
  templateUrl: './employee-type.component.html',
  styleUrls: ['./employee-type.component.scss']
})
export class EmployeeTypeComponent implements AfterViewInit  {

    createdOn: string = '';
    validationForm!: FormGroup;
    empTypeId!: string;
    empTypeName: string = '';
    empTypeList: empTypeList[] = [];
    displayedColumns: string[] = ['empTypeId', 'empTypeName', 'createdBy', 'createdOn', 'updatedBy', 'updatedOn', 'isActive', 'actions'];
    dataSource: MatTableDataSource<empTypeList>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    
    constructor(private employeetypeService: MasterService, private toastr: ToastrService) {
      this.dataSource = new MatTableDataSource<empTypeList>();
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
        this.saveemployeetypedata();
      }
      else {
        this.toastr.error("Please filled Details")
      }
    }
    saveemployeetypedata() {
      const currentDate = new Date().toISOString();
      const employeetypeDetails = {
        empTypeName: this.empTypeName.trim(),
        createdBy: "Ganesh",
        isActive: true,
        createdOn: currentDate
      };
      this.employeetypeService.saveEmployeeTypeDetail(employeetypeDetails).subscribe(
        () => {
          this.getEmployeeTypeList();
          this.toastr.success("Employee Type save successfully");
          this.showTabs = false;
          this.empTypeName = '';
        },
        (error) => {
          console.error(error);
          if (error.status === 500) {
            this.toastr.error("Duplicate Employee Type data. Please enter unique data.");
          } else {
            this.toastr.error("Something went wrong while saving the Employee Type details");
          }
        }
      );
    }
    showTabs: boolean = false;
    toggleTabs() {
      this.showTabs = !this.showTabs;
      this.empTypeName = '';
    }
    preventClose(event: MouseEvent) {
      event.stopPropagation();
    }
  
    /////////////**********Edit Popup********//////////////
  
    showEdits: boolean = false;
    toggleEdit(deptId: any) {
      this.showEdits = !this.showEdits;
      let obj: any = {}
      obj = this.empTypeList.find((ele) => { return ele.empTypeId == parseInt(deptId) });
      this.empTypeName = obj.empTypeName.trim();
      this.empTypeId = obj.empTypeId;
      this.createdOn = obj.createdOn;
    }
    preventCloses(event: MouseEvent) {
      event.stopPropagation();
    }
    closeFunction() {
      this.showEdits = !this.showEdits;
      this.empTypeName = '';
    }
    editemployeetypedata(): void {
      const currentDate = new Date().toISOString();
      const employeetypeDetails = {
        empTypeName: this.empTypeName,
        createdBy: "Ganesh",
        updatedBy: "Ganesh",
        isActive: true,
        updatedOn: currentDate,
        createdOn: this.createdOn
      };
      this.employeetypeService.editEmployeeTypeDetail(employeetypeDetails, this.empTypeId).subscribe(
        () => {
          this.getEmployeeTypeList();
          this.toastr.success("Employee Type Updated");
          this.showEdits = false;
        },
        (error) => {
          console.error(error);
          if (error.status === 500) {
            this.toastr.error("Duplicate Employee Type data. Please enter unique data.");
          } else {
            this.toastr.error("Something went wrong while saving the Employee Type details");
          }        }
      );
    }
  
    /////////////////////////////////////////////////////////////////
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.getEmployeeTypeList();
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    getEmployeeTypeList() {
      this.employeetypeService.getEmployeeTypeWithId().subscribe(res => {
        this.empTypeList = res;
        this.dataSource.data = this.empTypeList;
      });
    }
  }