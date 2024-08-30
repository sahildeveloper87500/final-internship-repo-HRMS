import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MasterService } from '../service/master.service';
import { countryList } from 'src/app/shared/models/master';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements AfterViewInit {

  validationForm!: FormGroup;
  createdOn: string = '';
  countryId!: string;
  countryName!: string;
  countryList: countryList[] = [];

  displayedColumns: string[] = ['countryId', 'countryName', 'createdBy', 'createdOn', 'updatedBy', 'updatedOn', 'isActive', 'actions'];
  dataSource: MatTableDataSource<countryList>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private countryService: MasterService, private toastr: ToastrService) {
    this.dataSource = new MatTableDataSource<countryList>();
    this.validationForm = new FormGroup({
      contName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
    });
  }

  get contName(): AbstractControl {
    return this.validationForm.get('contName')!;
  }

  onSubmit(form: FormGroup): void {
    this.validationForm.markAllAsTouched();
    if (form.valid) {
      this.savecountrydata();
    }
    else {
      this.toastr.error("Please filled Details")
    }
  }
  savecountrydata() {
    const currentDate = new Date().toISOString();
    const countryDetails = {
      countryName: this.countryName,
      createdBy: "Ganesh",
      isActive: true,
      createdOn: currentDate
    };

    this.countryService.saveCountryDetail(countryDetails).subscribe(
      () => {
        this.getCountryList();
        this.toastr.success("Country save successfully");
        this.showTabs = false;
        this.countryName = '';
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Country data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Country details");
        }
      }
    );
  }

  showTabs: boolean = false;
  toggleTabs() {
    this.showTabs = !this.showTabs;
    this.countryName = '';
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  /////////////*Edit Popup///////////

  showEdits: boolean = false;
  toggleEdit(deptId: any) {
    this.showEdits = !this.showEdits;
    let obj: any = {}
    obj = this.countryList.find((ele) => { return ele.countryId == parseInt(deptId) });
    this.countryName = obj.countryName.trim();
    this.countryId = obj.countryId;
    this.createdOn = obj.createdOn;
  }
  preventCloses(event: MouseEvent) {
    event.stopPropagation();
  }
  closeFunction() {
    this.showEdits = !this.showEdits;
    this.countryName = '';
  }
  editcountry(): void {
    const currentDate = new Date().toISOString();
    const countryDetails = {
      countryName: this.countryName,
      createdBy: "Ganesh",
      updatedBy: "Ganesh",
      isActive: true,
      updatedOn: currentDate,
      createdOn: this.createdOn
    };
    this.countryService.editCountrytDetail(countryDetails, this.countryId).subscribe(
      () => {
        this.getCountryList();
        this.toastr.success("Country Updated");
        this.showEdits = false;
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate Country data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the Country details");
        }
      }
    );
  }

  /////////////////////////////////////////////////////////

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getCountryList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getCountryList() {
    this.countryService.getCountryWithId().subscribe(res => {
      this.countryList = res;
      this.dataSource.data = this.countryList;
    })
  }
}