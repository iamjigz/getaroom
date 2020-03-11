import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrivagoRoutingModule } from './trivago-routing.module';
import { MaterialModule } from './../core/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TrivagoPageComponent } from './components/trivago-page/trivago-page.component';
import { TrivagoFormComponent } from './components/trivago-form/trivago-form.component';

@NgModule({
  declarations: [TrivagoPageComponent, TrivagoFormComponent],
  imports: [
    CommonModule,
    TrivagoRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TrivagoModule { }
