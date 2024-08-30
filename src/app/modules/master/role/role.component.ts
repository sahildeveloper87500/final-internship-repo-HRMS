import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { roleList } from 'src/app/shared/models/master';
import { MasterService } from '../service/master.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements AfterViewInit{

  validationForm!: FormGroup;
  createdOn: string = '';
  roleID!: string;
  roleName!: string;
  roleList: roleList[] = [];

  displayedColumns: string[] = ['roleId', 'roleName', 'createdBy', 'createdOn', 'updatedBy', 'updatedOn', 'isActive', 'actions'];
  dataSource: MatTableDataSource<roleList>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private roleService: MasterService, private toastr: ToastrService) {
    this.dataSource = new MatTableDataSource<roleList>();
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
      this.saveroledata();
    }
    else {
      this.toastr.error("Please filled Details")
    }
  }
  saveroledata() {
    const currentDate = new Date().toISOString();
    const roleDetails = {
      roleName: this.roleName.trim(),
      createdBy: "Ganesh",
      createdOn: currentDate,
      isActive: true
    };
    this.roleService.saveRoleDetail(roleDetails).subscribe(
      () => {
        this.getRoleList();
        this.toastr.success("Role save successfully");
        this.showTabs = false;
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Role data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Role details");
        }
      }
    );
  }
  showTabs: boolean = false;
  toggleTabs() {
    this.showTabs = !this.showTabs;
    this.roleName = '';
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  /////////////*Edit Popup///////////

  showEdits: boolean = false;
  toggleEdit(deptId: any) {
    this.showEdits = !this.showEdits;

    let obj: any = {}
    obj = this.roleList.find((ele) => { return ele.roleId == parseInt(deptId) });
    this.roleName = obj.roleName;
    this.roleID= obj.roleId;
    this.createdOn= obj.createdOn;
  }
  preventCloses(event: MouseEvent) {
    event.stopPropagation();
  }
  closeFunction() {
    this.showEdits = !this.showEdits;
    this.roleName = '';
  }

  editroledata() {
    const currentDate = new Date().toISOString();
    const roleDetails = {
      roleName: this.roleName,
      createdBy: "Ganesh",
      updatedBy: "Ganesh",
      isActive: true,
      updatedOn: currentDate,
      createdOn: this.createdOn
    };

    this.roleService.editRoleDetail(roleDetails, this.roleID).subscribe(
      () => {
        this.getRoleList();
        this.toastr.success("Role Updated");
        this.showEdits = false;
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Role data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Role details");
        }      }
    );
  }

  /////////////////////////////////////////////////////////
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getRoleList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getRoleList() {
    this.roleService.getRoleWithId().subscribe(res => {
      this.roleList = res;
      this.dataSource.data = this.roleList;
 })
 }

}