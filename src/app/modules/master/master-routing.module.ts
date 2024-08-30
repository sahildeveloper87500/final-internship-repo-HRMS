import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { MasterSubHeaderComponent } from './master-sub-header/master-sub-header.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { ClientComponent } from './client/client.component';
import { OfficeComponent } from './office/office.component';
import { EductionComponent } from './eduction/eduction.component';
import { WorkShiftComponent } from './work-shift/work-shift.component';
import { JobTitleComponent } from './job-title/job-title.component';
import { PayGradeComponent } from './pay-grade/pay-grade.component';
import { RoleComponent } from './role/role.component';
import { WorkTypeComponent } from './work-type/work-type.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { BankComponent } from './bank/bank.component';
import { AddFamilyComponent } from './add-family/add-family.component';
import { EmployeeTypeComponent } from './employee-type/employee-type.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'MasterHeader', component: MasterSubHeaderComponent,data: { title: 'Master/Master' } },
  { path: 'department', component: DepartmentComponent,data: { title: 'Master/Department' } },
  { path: 'designation', component: DesignationComponent,data: { title: 'Master/Designation' } },
  { path: 'client', component: ClientComponent,data: { title: 'Master/Client' } },
  { path: 'office', component: OfficeComponent,data: { title: 'Master/Office' } },
  { path: 'eduction', component: EductionComponent,data: { title: 'Master/Eduction' } },
  { path: 'Workshift', component: WorkShiftComponent,data: { title: 'Master/Work Shift' } },
  { path: 'jobTitle', component: JobTitleComponent,data: { title: 'Master/Job Title' } },
  { path: 'PayGrade', component: PayGradeComponent,data: { title: 'Master/Pay Grade' } },
  { path: 'role', component: RoleComponent ,data: { title: 'Master/Role' }},
  { path: 'WorkType', component: WorkTypeComponent,data: { title: 'Master/Work Type' } },
  { path: 'country', component: CountryComponent,data: { title: 'Master/Country' } },
  { path: 'state', component: StateComponent,data: { title: 'Master/State' } },
  { path: 'bank', component: BankComponent,data: { title: 'Master/Bank' } },
  { path: 'addfamily', component: AddFamilyComponent ,data: { title: 'Master/Add Family' }},
  { path: 'emptype', component: EmployeeTypeComponent,data: { title: 'Master/Employee Type' } }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
