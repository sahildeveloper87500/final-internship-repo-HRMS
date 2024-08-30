import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { MasterService } from '../service/master.service';
import { jobTitleList } from 'src/app/shared/models/master';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.scss']
})
export class JobTitleComponent implements AfterViewInit {

  validationForm!: FormGroup;
  createdOn: string = '';
  jobTitleId!: string;
  jobTitleName!: string;
  jobDescription!: string;
  jobtitleList: jobTitleList[] = [];

  displayedColumns: string[] = ['jobTitleId', 'jobTitleName', 'jobDescription', 'createdBy', 'createdOn', 'updatedBy', 'updatedOn', 'isActive', 'actions'];
  dataSource: MatTableDataSource<jobTitleList>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private jobtitleService: MasterService, private toastr: ToastrService) {
    this.dataSource = new MatTableDataSource<jobTitleList>();
    this.validationForm = new FormGroup({
      jobtName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      textarea: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),

    });
  }

  get jobtName(): AbstractControl {
    return this.validationForm.get('jobtName')!;
  }

  get textarea(): AbstractControl {
    return this.validationForm.get('textarea')!;
  }

  onSubmit(form: FormGroup): void {
    this.validationForm.markAllAsTouched();
    if (form.valid) {
      this.savejobtitledata();
    }
    else {
      this.toastr.error("Please filled Details")
    }
  }
  savejobtitledata() {
    const currentDate = new Date().toISOString();
    const jobtitleDetails = {
      jobTitleName: this.jobTitleName,
      jobDescription: this.jobDescription,
      createdBy: "Ganesh",
      createdOn: currentDate,
      isActive: true
    };
    this.jobtitleService.saveJobTitleDetail(jobtitleDetails).subscribe(
      () => {
        this.getJobTitleList();
        this.toastr.success("Job Title save successfully");
        this.showTabs = false;
        this.jobTitleName = '';
        this.jobDescription = '';
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Job Title data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Job Title details");
        }
      }
    );
  }
  showTabs: boolean = false;
  toggleTabs() {
    this.showTabs = !this.showTabs;
    this.jobTitleName = '';
    this.jobDescription = '';
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  ///////////////////////*Edit Popup*////////////////////

  showEdits: boolean = false;
  toggleEdit(deptId: any) {
    this.showEdits = !this.showEdits;

    let obj: any = {}
    obj = this.jobtitleList.find((ele) => { return ele.jobTitleId == parseInt(deptId) });
    this.jobTitleName = obj.jobTitleName;
    this.jobTitleId = obj.jobTitleId;
    this.jobDescription=obj.jobDescription;
    this.createdOn = obj.createdOn;
  }
  preventCloses(event: MouseEvent) {
    event.stopPropagation();
  }
  closeFunction() {
    this.showEdits = !this.showEdits;
    this.jobTitleName = '';
    this.jobDescription = '';
  }

  editjobitledata() {
    const currentDate = new Date().toISOString();
    const jobtitleDetails = {
      jobTitleName: this.jobTitleName,
      jobDescription: this.jobDescription,
      createdBy: "Ganesh",
      updatedBy: "Ganesh",
      updatedOn: currentDate,
      isActive: true,
      createdOn: this.createdOn
    };

    this.jobtitleService.editJobTitleDetail(jobtitleDetails, this.jobTitleId).subscribe(
      () => {
        this.getJobTitleList();
        this.toastr.success("JobTitle Updated");
        this.showEdits = false;
      },
      (error) => {
        console.error(error);
        this.toastr.error("Duplicate Job Title data. Please enter unique data.");
      }
    );
  }
  /////////////////////////////////////////////////////////

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getJobTitleList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getJobTitleList() {
    this.jobtitleService.getJobTitleWithId().subscribe(res => {
      this.jobtitleList = res;
      this.dataSource.data = this.jobtitleList;
    })
  }
}