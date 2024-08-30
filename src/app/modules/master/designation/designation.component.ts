import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, Subscription } from 'rxjs';
import { MasterService } from '../service/master.service';
import { departmentList, designationList } from 'src/app/shared/models/master';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements AfterViewInit {

  validationForm!: FormGroup;
  designationName!: string;
  designationList: Array<designationList> = [];

  createdOn: string = '';
  departmentId!: string;
  designationId!: string;
  departmentName: string | null = null;
  departmentList: Array<departmentList> = [];
  displayedColumns: string[] = ['desigId', 'departmentName', 'designationName', 'createdBy', 'createdOn', 'updatedBy', 'updatedOn', 'isActive', 'actions'];
  dataSource: MatTableDataSource<designationList>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  submitted: any;
  registration: any;

  constructor(private designationService: MasterService, private toastr: ToastrService) {
    this.dataSource = new MatTableDataSource<designationList>();
    this.validationForm = new FormGroup({
      desigName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      select: new FormControl(null, Validators.required),
    });
  }

  get desigName(): AbstractControl {
    return this.validationForm.get('desigName')!;
  }
  get select(): AbstractControl {
    return this.validationForm.get('select')!;
  }

  onSubmit(form: FormGroup): void {
    this.validationForm.markAllAsTouched();
    if (form.valid) {
      this.savedesignationdata();
    }
    else {
      this.toastr.error("Please filled Details")
    }
  }
  savedesignationdata() {
    let obj = this.departmentList.find((ele) => { return ele.deptId == parseInt(this.departmentId) });
    const currentDate = new Date().toISOString();
    const desigDetails = {
      designationName: this.designationName.trim(),
      departmentName: obj?.departmentName,
      deptId: obj?.deptId,
      createdBy: "Ganesh",
      createdOn: currentDate,
      remarks: "string",
      isActive: true
    };
    this.designationService.saveDesignationDetail(desigDetails).subscribe(
      () => {
        this.getDesignationList();
        this.getDepartmentList();
        this.toastr.success("Designation save successfully");
        this.showTabs = false;
        this.departmentName = '';
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate designation data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Designation details");
        }
      }
    );
  }

  showTabs: boolean = false;
  toggleTabs() {
    this.showTabs = !this.showTabs;
    this.designationName = '';
    this.departmentId = '';
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  /////////////*********Edit Popup********///////////

  showEdits: boolean = false;

  toggleEdit(desigId: any) {
    this.showEdits = !this.showEdits;

    let obj: any = {}
    obj = this.designationList.find((ele) => { return ele.desigId == parseInt(desigId) });
    this.designationName = obj.designationName.trim();
    this.departmentName = obj.departmentName;
    this.designationId = obj.desigId;
    this.createdOn = obj.createdOn;
  }
  preventCloses(event: MouseEvent) {
    event.stopPropagation();
  }
  closeFunction() {
    this.showEdits = false;
    this.designationName = '';
    this.departmentName = null;
  }

  editdesigdata() {
    this.showTabs = false;
    const currentDate = new Date().toISOString();
    const desigDetails = {
      departmentName: this.departmentName,
      designationName: this.designationName,
      createdBy: "Ganesh",
      updatedBy: "Ganesh",
      isActive: true,
      updatedOn: currentDate,
      createdOn: this.createdOn
    };

    this.designationService.editDesignationDetail(desigDetails, this.designationId).subscribe(
      () => {
        this.getDesignationList();
        this.getDepartmentList();
        this.toastr.success("Designation Updated");
        this.showEdits = false;
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate designation data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Designation details");
        }
      }
    );
  }

  /////////////////////////////////////////////////////////

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getDesignationList();
    this.getDepartmentList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getDesignationList() {
    this.designationService.getDesigWithId().subscribe(res => {
      this.designationList = res;
      this.dataSource.data = this.designationList;
    })
  }
  //Department Dropdown/
  getDepartmentList() {
    this.designationService.getAllDepartments()
      .subscribe(res => {
        this.departmentList = res;
        this.dataSource = new MatTableDataSource<designationList>(this.designationList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }
  handleDeptInput(event: any) {
    const deptId = event.target.value;
    // console.log(typeof (deptId))
  }
  ////////////////////////////////////////////
}