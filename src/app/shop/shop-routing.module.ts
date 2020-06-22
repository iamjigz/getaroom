import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { ShopSingleComponent } from './components/shop-single/shop-single.component';

const routes: Routes = [
  { path: 'main', component: ShopPageComponent },
  { path: 'single', component: ShopSingleComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
