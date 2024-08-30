import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MasterService } from '../service/master.service';
import { ToastrService } from 'ngx-toastr';
import { countryList, stateList } from 'src/app/shared/models/master';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements AfterViewInit {

  validationForm!: FormGroup;
  stateName!: string;
  stateList: Array<stateList> = [];

  createdOn: string = '';
  countryId!: string;
  stateId!: string;
  country: string | null = null;
  countryName: string | null = null;
  countryList: Array<countryList> = [];
  displayedColumns: string[] = ['stateId', 'country', 'stateName', 'createdBy', 'createdOn', 'updatedBy', 'updatedOn', 'isActive', 'actions'];
  dataSource: MatTableDataSource<stateList>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private stateService: MasterService, private toastr: ToastrService) {
    this.dataSource = new MatTableDataSource<stateList>();
    this.validationForm = new FormGroup({
      stName: new FormControl(null, { validators: Validators.required, updateOn: 'change' }),
      select: new FormControl(null, Validators.required),
    });
  }
  get stName(): AbstractControl {
    return this.validationForm.get('stName')!;
  }
  get select(): AbstractControl {
    return this.validationForm.get('select')!;
  }

  onSubmit(form: FormGroup): void {
    this.validationForm.markAllAsTouched();
    if (form.valid) {
      this.savestatedata();
    }
    else {
      this.toastr.error("Please filled Details")
    }
  }
  savestatedata() {
    let obj = this.countryList.find((ele) => { return ele.countryId == parseInt(this.countryId) });
    const currentDate = new Date().toISOString();
    const stateDetails = {
      stateName: this.stateName.trim(),
      country: obj?.countryName,
      countryId: obj?.countryId,
      createdBy: "Ganesh",
      createdOn: currentDate,
      isActive: true
    };
    this.stateService.saveStateDetail(stateDetails).subscribe(
      () => {
        this.getStateList();
        this.getCountryList();
        this.toastr.success("State save successfully");
        this.showTabs = false;
        this.country = '';
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate State data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the State details");
        }
      }
    );
  }

  showTabs: boolean = false;

  toggleTabs() {
    this.showTabs = !this.showTabs;
    this.stateName = '';
    this.countryId = '';
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  /////////////*********Edit Popup********///////////

  showEdits: boolean = false;

  toggleEdit(statId: any) {
    this.showEdits = !this.showEdits;

    let obj: any = {}
    obj = this.stateList.find((ele) => { return ele.stateId == parseInt(statId) });
    this.stateName = obj.stateName.trim();
    this.country = obj.country;
    this.stateId = obj.stateId;
    this.createdOn = obj.createdOn;
  }
  preventCloses(event: MouseEvent) {
    event.stopPropagation();
  }
  closeFunction() {
    this.showEdits = false;
    this.stateName = '';
    this.country = null;
  }
  editstatedata() {
    this.showTabs = false;
    const currentDate = new Date().toISOString();
    const stateDetails = {
      country: this.country,
      stateName: this.stateName,
      createdBy: "Ganesh",
      updatedBy: "Ganesh",
      isActive: true,
      updatedOn: currentDate,
      createdOn: this.createdOn
    };
    this.stateService.editStateDetail(stateDetails, this.stateId).subscribe(
      () => {
        this.getStateList();
        this.getCountryList();
        this.toastr.success("State Updated");
        this.showEdits = false;
      },
      (error) => {
        console.error(error);
        if (error.status === 500) {
          this.toastr.error("Duplicate State data. Please enter unique data.");
        } else {
          this.toastr.error("Something went wrong while saving the State details");
        }
      }
    );
  }

  /////////////////////////////////////////////////////////

  ngOnInit() {
    this.getCountryList();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getStateList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getStateList() {
    this.stateService.getStateWithId().subscribe(res => {
      this.stateList = res;
      this.dataSource.data = this.stateList;
    })
  }

  //Country Dropdown/
  getCountryList() {
    this.stateService.getAllCountry()
      .subscribe(res => {
        this.countryList = res;

        this.dataSource = new MatTableDataSource<stateList>(this.stateList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }
  handlecountryInput(event: any) {
    const countryId = event.target.value;
    // console.log(typeof (countryId))
  }
  ////////////////////////////////////////////
}