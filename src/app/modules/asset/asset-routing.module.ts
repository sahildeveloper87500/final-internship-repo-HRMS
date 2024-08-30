import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AssetSubHeaderComponent } from './asset-sub-header/asset-sub-header.component';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'assetheader', component: AssetSubHeaderComponent,data: { title: 'Asset/Master' } },
    { path: 'assetlist', component: AssetsListComponent ,data: { title: 'Asset/Asset List' }},
    { path: 'assetbrand', component: BrandComponent,data: { title: 'Asset/Brand' } },
    { path: 'category', component: CategoryComponent,data: { title: 'Asset/Category' } },
    { path: 'vendor', component: VendorComponent,data: { title: 'Asset/Vendor' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
