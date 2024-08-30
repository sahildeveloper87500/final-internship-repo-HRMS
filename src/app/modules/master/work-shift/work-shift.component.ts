import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../service/master.service';
import { workshiftList } from 'src/app/shared/models/master';

@Component({
  selector: 'app-work-shift',
  templateUrl: './work-shift.component.html',
  styleUrls: ['./work-shift.component.scss']
})
export class WorkShiftComponent implements AfterViewInit{

    createdOn: string = '';
    validationForm!: FormGroup;
    workShiftId!: string;
    workShiftName: string = '';
    workFrom: string='';
    workTo:string='';
    totalHours:string = '';
    workshiftList: workshiftList[] = [];
    displayedColumns: string[] = ['workShiftId', 'workShiftName','workFrom','workTo','totalHours', 'createdBy', 'createdOn', 'updatedBy', 'updatedOn', 'isActive', 'actions'];
    dataSource: MatTableDataSource<workshiftList>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    
    constructor(private departmentService: MasterService, private toastr: ToastrService) {
      this.dataSource = new MatTableDataSource<workshiftList>();
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
      const workshiftDetails = {
        workShiftName: this.workShiftName.trim(),
        workFrom: this.workFrom,
        workTo: this.workTo,
        totalHours: this.totalHours,
        createdBy: "Ganesh",
        isActive: true,
        createdOn: currentDate
      };
      this.departmentService.saveWorkShiftDetail(workshiftDetails).subscribe(
        () => {
          this.getDepartmentList();
          this.toastr.success("Department save successfully");
          this.showTabs = false;
          this.workShiftName = '';
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
      this.workShiftName = '';
    }
    preventClose(event: MouseEvent) {
      event.stopPropagation();
    }
  
    /////////////**********Edit Popup********//////////////
  
    showEdits: boolean = false;
    toggleEdit(deptId: any) {
      this.showEdits = !this.showEdits;
      let obj: any = {}
      obj = this.workshiftList.find((ele) => { return ele.workShiftId == parseInt(deptId) });
      this.workShiftName = obj.workShiftName.trim();
      this.workFrom = obj.workFrom;
      this.workTo = obj.workTo;
      this.totalHours = obj.totalHours;
      this.workShiftId = obj.workShiftId;
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
      const workshiftDetails = {
        workShiftName: this.workShiftName,
        workFrom: this.workFrom,
        workTo: this.workTo,
        createdBy: "Ganesh",
        updatedBy: "Ganesh",
        isActive: true,
        updatedOn: currentDate,
        createdOn: this.createdOn
      };
      this.departmentService.editWorkShiftDetail(workshiftDetails, this.workShiftId).subscribe(
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
      this.departmentService.getWorkShiftWithId().subscribe(res => {
        this.workshiftList = res;
        this.dataSource.data = this.workshiftList;
      });
    }

  calculateHours() {
    throw new Error('Method not implemented.');
  }


  hours: any;


  addworkshift() {
    this.showTabs = false;
  }

  departmrntForm!: FormGroup
  workShift: string = '';
  startTime: string = '';
  endTime: string = '';
  hoursPerDay: string = '';

  calculateHoursPerDay(): void {
    if (this.startTime && this.endTime) {
      const startParts = this.startTime.split(':');
      const endParts = this.endTime.split(':');

      const startHours = parseInt(startParts[0], 10);
      const startMinutes = parseInt(startParts[1], 10);

      const endHours = parseInt(endParts[0], 10);
      const endMinutes = parseInt(endParts[1], 10);

      // Calculate the total minutes
      const totalMinutes = (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes);

      // Convert total minutes to hours and round down to the nearest whole number
      const hours = Math.floor(totalMinutes / 60);
      const remainingMinutes = totalMinutes % 60;

      // Update the hoursPerDay property with a formatted string
      this.hoursPerDay = `${hours}h ${remainingMinutes}m`;
    }
  }
}