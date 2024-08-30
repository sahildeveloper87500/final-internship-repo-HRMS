import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { HttpClientModule } from '@angular/common/http';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MainComponent } from './main/main.component';
import { CommonComponent } from './common/common.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeSubHeaderComponent } from './employee/employee-sub-header/employee-sub-header.component';
import { ProsonalDetailsComponent } from './employee/prosonal-details/prosonal-details.component';
import { AttendanceComponent } from './attendance/attendance.component';
// import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScriptLoaderService } from 'src/assets/js/script-loader.service';
import { QualificationComponent } from './employee/qualification/qualification.component';
import { IdentityComponent } from './employee/identity/identity.component';
import { FamilyComponent } from './employee/family/family.component'; 
import { ExperienceComponent } from './employee/experience/experience.component';
import { EmploymentComponent } from './employee/employment/employment.component';
import { BankAccountComponent } from './employee/bank-account/bank-account.component';
import { AddressComponent } from './employee/address/address.component';
import { ContactComponent } from './employee/contact/contact.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { MasterComponent } from './master/master.component';
import { DepartmentComponent } from './master/department/department.component';
import { DesignationComponent } from './master/designation/designation.component';
import { OfficeComponent } from './master/office/office.component';
import { ClientComponent } from './master/client/client.component';
import { FormsModule } from '@angular/forms'; 
//*******************************ganesh****************************
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {TooltipPosition} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';
import {MatMenuModule} from '@angular/material/menu';
import { MasterSubHeaderComponent } from './master/master-sub-header/master-sub-header.component';
import { QuickLinksComponent } from './common/quick-links/quick-links.component';
import { AssetComponent } from './asset/asset.component';
import { BrandComponent } from './asset/brand/brand.component';
import { CategoryComponent } from './asset/category/category.component';
import { VendorComponent } from './asset/vendor/vendor.component';
import { AssetsListComponent } from './asset/assets-list/assets-list.component';
import { LeaveComponent } from './leave/leave.component';
import { ApplyComponent } from './leave/apply/apply.component';
import { LeaveSubHeaderComponent } from './leave/leave-sub-header/leave-sub-header.component';
import { MyLeaveUsageComponent } from './leave/my-leave-usage/my-leave-usage.component';
import { MyLeaveComponent } from './leave/my-leave/my-leave.component';
import { AttendanceListComponent } from './attendance/attendance-list/attendance-list.component';
import { EmployeeAttendanceComponent } from './attendance/employee-attendance/employee-attendance.component';
import { ApproveRejectComponent } from './attendance/approve-reject/approve-reject.component';
import { AttendanceSubHeaderComponent } from './attendance/attendance-sub-header/attendance-sub-header.component';
import { AssetSubHeaderComponent } from './asset/asset-sub-header/asset-sub-header.component';
import { SettingsComponent } from './common/settings/settings.component';
import { EductionComponent } from './master/eduction/eduction.component';
import { WorkShiftComponent } from './master/work-shift/work-shift.component';
import { JobTitleComponent } from './master/job-title/job-title.component'; 
import { PayGradeComponent } from './master/pay-grade/pay-grade.component'; 
import { DataTablesModule } from 'angular-datatables';
import { RoleComponent } from './master/role/role.component';
import { WorkTypeComponent } from './master/work-type/work-type.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CountryComponent } from './master/country/country.component';
import { BankComponent } from './master/bank/bank.component';
import { StateComponent } from './master/state/state.component';
import { EmployeeTypeComponent } from './master/employee-type/employee-type.component';
import { AddFamilyComponent } from './master/add-family/add-family.component';
import { LayoutComponent } from './layout/layout.component';
import { FilterpipePipe } from '../shared/Pipes/filterpipe.pipe';
import { LayoutTableComponent } from './layout-table/layout-table.component';
import { AttendencePunchComponent } from './attendance/attendence-punch/attendence-punch.component';


@NgModule({
  declarations: [
    DashboardComponent,LayoutTableComponent,
    MainDashboardComponent,
    MainComponent, CommonComponent, HeaderComponent, FooterComponent, SidebarComponent, EmployeeComponent,
    ProsonalDetailsComponent,EmployeeSubHeaderComponent, AttendanceComponent,
    EmployeeListComponent,
    EmployeeDashboardComponent,
    QualificationComponent,IdentityComponent,FamilyComponent,ExperienceComponent,EmploymentComponent,ContactComponent,
    BankAccountComponent,
    FilterpipePipe,AddressComponent,ProfileComponent, MasterComponent, DepartmentComponent, DesignationComponent, OfficeComponent, ClientComponent, MasterSubHeaderComponent, QuickLinksComponent, AssetComponent, BrandComponent, CategoryComponent, VendorComponent, AssetsListComponent, LeaveComponent, ApplyComponent, LeaveSubHeaderComponent, MyLeaveUsageComponent, MyLeaveComponent, AttendanceListComponent, EmployeeAttendanceComponent, ApproveRejectComponent, AttendanceSubHeaderComponent, AssetSubHeaderComponent, SettingsComponent, EductionComponent, WorkShiftComponent, JobTitleComponent, PayGradeComponent, RoleComponent, WorkTypeComponent, CountryComponent, BankComponent, StateComponent, EmployeeTypeComponent, AddFamilyComponent, LayoutComponent, AttendencePunchComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MdbTabsModule,
    MdbAccordionModule,
   // BrowserAnimationsModule,
   MdbValidationModule,
   MdbTooltipModule,
   MdbScrollspyModule,
   MdbRippleModule,
   MdbRangeModule,
   MdbRadioModule,
   MdbModalModule,
   MdbPopoverModule,
   MdbFormsModule,
   MdbDropdownModule,
   MdbCheckboxModule,
   MdbCollapseModule,
   MdbCarouselModule,
   HttpClientModule,
   FormsModule,
//************** */ ganesh******************
   ReactiveFormsModule,
   MatPaginatorModule,
   MatTableModule,
   MatTooltipModule,
   MatFormFieldModule,
   MatIconModule,
   MatButtonModule,
   MatDialogModule,
   MatDatepickerModule,
   MatInputModule,
   MatNativeDateModule,
   MatSelectModule,
   MatStepperModule,
   MatMenuModule,
   DataTablesModule,
   //#region Time Picker
   NgxMaterialTimepickerModule,
   //#endregion
  ],
  providers: [ScriptLoaderService],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule { }
