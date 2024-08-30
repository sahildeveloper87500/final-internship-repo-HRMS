import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AttendanceSubHeaderComponent } from './attendance-sub-header/attendance-sub-header.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { ApproveRejectComponent } from './approve-reject/approve-reject.component';
import { AttendencePunchComponent } from './attendence-punch/attendence-punch.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'atteHeader', component: AttendanceSubHeaderComponent,data: { title: 'Attendance/Master' } },
    { path: 'alist', component: AttendanceListComponent,data: { title: 'Attendance/List' } },
    { path: 'empatt', component: EmployeeAttendanceComponent,data: { title: 'Attendance/Emp Attendance' } },
    { path: 'apprej', component: ApproveRejectComponent ,data: { title: 'Attendance/Approve Reject' }},
    { path: 'attendancepunch', component: AttendencePunchComponent ,data: { title: 'Attendance/ Attendance Punch' }},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
