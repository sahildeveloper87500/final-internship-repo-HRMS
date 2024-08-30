 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { LeaveSubHeaderComponent } from './leave/leave-sub-header/leave-sub-header.component';
import { ApplyComponent } from './leave/apply/apply.component';
import { MyLeaveComponent } from './leave/my-leave/my-leave.component';
import { MyLeaveUsageComponent } from './leave/my-leave-usage/my-leave-usage.component';
import { AttendanceSubHeaderComponent } from './attendance/attendance-sub-header/attendance-sub-header.component';
import { AttendanceListComponent } from './attendance/attendance-list/attendance-list.component';
import { EmployeeAttendanceComponent } from './attendance/employee-attendance/employee-attendance.component';
import { ApproveRejectComponent } from './attendance/approve-reject/approve-reject.component';
import { AssetSubHeaderComponent } from './asset/asset-sub-header/asset-sub-header.component';
import { AssetsListComponent } from './asset/assets-list/assets-list.component';
import { BrandComponent } from './asset/brand/brand.component';
import { CategoryComponent } from './asset/category/category.component';
import { VendorComponent } from './asset/vendor/vendor.component'; 
// yort { EmployeeListComponent } from './employee/employee-list/employee-list.component';

const routes: Routes = [{
  path: '',
  component: MainDashboardComponent,
  children: [
    //{ path: '', redirectTo: '', pathMatch: "full" }, // for refresh url geting error 404
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/main/dashboard', pathMatch: 'full' },
//#region Employee 
    {
      path: 'employee',
      loadChildren: () => import('./employee/employee.module').then((E) => E.EmployeeModule),
 },
 //#endregion

  //#region  Master
  {path:'master',
  loadChildren:()=>import('./master/master.module').then((m)=>m.MasterModule),
},
//#endregion

//Asset************************* */
{
  path:'asset',
  loadChildren:()=>import('./asset/asset.module').then((a)=>a.AssetModule),
},
// //Leave************************* */
{
path:'leave',
loadChildren:()=>import('./leave/leave.module').then((l)=>l.LeaveModule)
},
// //Attendance************************* */
{
path:'attendence',
loadChildren:()=>import('./attendance/attendance.module').then((a)=>a.AttendanceModule)
},
{
path:'layout',
loadChildren:()=>import('./layout/layout.module').then((a)=>a.LayoutModule)
}



     
    //***********************Asset************************** */
    // { path: 'assetheader', component: AssetSubHeaderComponent },
    // { path: 'assetlist', component: AssetsListComponent },
    // { path: 'assetbrand', component: BrandComponent },
    // { path: 'category', component: CategoryComponent },
    // { path: 'vendor', component: VendorComponent },
    //***********************Leave************************** */
    // { path: 'leaveHeader', component: LeaveSubHeaderComponent },
    // { path: 'apply', component: ApplyComponent },
    // { path: 'leave', component: MyLeaveComponent },
    // { path: 'leaveusage', component: MyLeaveUsageComponent },
    //***********************Attendance************************** */
    // { path: 'atteHeader', component: AttendanceSubHeaderComponent },
    // { path: 'alist', component: AttendanceListComponent },
    // { path: 'empatt', component: EmployeeAttendanceComponent },
    // { path: 'apprej', component: ApproveRejectComponent },
  ],
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
