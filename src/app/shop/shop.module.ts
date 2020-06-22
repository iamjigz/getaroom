import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';

import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { ShopSingleComponent } from './components/shop-single/shop-single.component';
import { ShopFormComponent } from './components/shop-form/shop-form.component';


@NgModule({
  declarations: [ShopPageComponent, ShopSingleComponent, ShopFormComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
