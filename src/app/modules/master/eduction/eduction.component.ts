import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { MasterService } from '../service/master.service';
import { ToastrService } from 'ngx-toastr';
import { educationList } from 'src/app/shared/models/master';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-eduction',
  templateUrl: './eduction.component.html',
  styleUrls: ['./eduction.component.scss']
})
export class EductionComponent implements AfterViewInit{

  validationForm!: FormGroup;
  createdOn: string = '';
  educationId!: string;
  educationName!: string;
  educationList: educationList[] = [];
  displayedColumns: string[] = ['educationId', 'educationName', 'createdBy', 'createdOn', 'updatedBy', 'updatedOn', 'isActive', 'actions'];
  dataSource: MatTableDataSource<educationList>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private educationService: MasterService, private toastr: ToastrService) {
    this.dataSource = new MatTableDataSource<educationList>();
    this.validationForm = new FormGroup({
      educName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    });
  }

  get educName(): AbstractControl {
    return this.validationForm.get('educName')!;
  }

  onSubmit(form: FormGroup): void {
    this.validationForm.markAllAsTouched();
    if (form.valid) {
      this.saveeducationdata();
    }
    else{
      this.toastr.error("Please filled Details")
    }
  }
  saveeducationdata() {
    const currentDate = new Date().toISOString();
    const educationDetails = {
      educationName: this.educationName,
      createdBy: "Ganesh", 
      createdOn: currentDate,
      isActive: true,
    };

    this.educationService.saveEducationDetail(educationDetails).subscribe(
      () => {
        this.getEducationList();
        this.toastr.success("Education save successfully");
        this.showTabs = false;
        this.educationName = '';
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Education data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Education details");
        }
      }
    );
  }
  showTabs: boolean = false;
  toggleTabs() {
    this.showTabs = !this.showTabs;
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  /////////////*Edit Popup*///////////

  showEdits: boolean = false;
  toggleEdit(deptId: any) {
    this.showEdits = !this.showEdits;

    let obj: any = {}
    obj = this.educationList.find((ele) => { return ele.educationId == parseInt(deptId) });
    this.educationName = obj.educationName;
    this.educationId= obj.educationId;
    this.createdOn= obj.createdOn;
  }
  preventCloses(event: MouseEvent) {
    event.stopPropagation();
  }
  closeFunction() {
    this.showEdits = false;
    this.educationName = ''; 
  }

  editeducationdata(): void {
    const currentDate = new Date().toISOString();
    const educationDetails = {
      educationName: this.educationName,
      createdBy: "Ganesh",
      updatedBy: "Ganesh",
      updatedOn: currentDate,
      isActive: true,
      createdOn: this.createdOn
    };

    this.educationService.editEducationDetail(educationDetails, this.educationId).subscribe(
      () => {
        this.getEducationList();
        this.toastr.success("Education Updated");
        this.showEdits = false;
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Education data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Education details");
        }      }
    );
  }

  /////////////////////////////////////////////////////////

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getEducationList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEducationList() {
    this.educationService.getEducationWithId().subscribe(res => {
      this.educationList = res;
      this.dataSource.data = this.educationList;
 })
 }
}