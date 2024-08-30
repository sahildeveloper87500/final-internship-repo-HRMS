import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { EmployeeSubHeaderComponent } from './employee-sub-header/employee-sub-header.component';
import { ProsonalDetailsComponent } from './prosonal-details/prosonal-details.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AddressComponent } from './address/address.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmploymentComponent } from './employment/employment.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { IdentityComponent } from './identity/identity.component';
import { FamilyComponent } from './family/family.component';

const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'empSubHeader', component: EmployeeSubHeaderComponent ,data: { title: ' Employee / SubHeader' } },
    { path: 'personal', component: ProsonalDetailsComponent,data: { title: 'Employee / Personal Details' } },
    { path: 'Empdashboard', component: EmployeeDashboardComponent,data: { title: 'Employee/Dashboard' } },
    { path: 'Emplist', component: EmployeeListComponent,data: { title: 'Employee/List' } },
    { path: 'employement', component: EmploymentComponent,data: { title: 'Employee/Employeement' } },
    { path: 'qualification', component: QualificationComponent,data: { title: 'Employee/Qualification' } },
    { path: 'address', component: AddressComponent,data: { title: 'Employee/Address' } },
    { path: 'contact', component: ContactComponent ,data: { title: 'Employee/Contact' }},
    { path: 'identity', component: IdentityComponent ,data: { title: 'Employee/Identity' }},
    { path: 'bankaccount', component: BankAccountComponent,data: { title: 'Employee/Bank Account' } },
    { path: 'family', component: FamilyComponent,data: { title: 'Employee/Family' } },
    { path: 'experience', component: ExperienceComponent,data: { title: 'Employee/Experience' } },
    { path: 'profile', component: ProfileComponent,data: { title: 'Employee/Profile' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule{}