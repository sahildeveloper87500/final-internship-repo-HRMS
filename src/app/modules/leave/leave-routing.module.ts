import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { LeaveSubHeaderComponent } from './leave-sub-header/leave-sub-header.component';
import { ApplyComponent } from './apply/apply.component';
import { MyLeaveComponent } from './my-leave/my-leave.component';
import { MyLeaveUsageComponent } from './my-leave-usage/my-leave-usage.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'leaveHeader', component: LeaveSubHeaderComponent ,data: { title: 'Leave/Master' }},
  { path: 'apply', component: ApplyComponent,data: { title: 'Leave/Apply' } },
  { path: 'leave', component: MyLeaveComponent,data: { title: 'Leave/Leave' } },
  { path: 'leaveusage', component: MyLeaveUsageComponent,data: { title: 'Leave/Leave Usage' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
