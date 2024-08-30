import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { LayoutComponent } from './layout.component';
import { LayoutTableComponent } from '../layout-table/layout-table.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'layout', component: LayoutComponent ,data: { title: ' Layout' } },
  { path: 'layouttable', component: LayoutTableComponent ,data: { title: ' LayoutTable' } },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
