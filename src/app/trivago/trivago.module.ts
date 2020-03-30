import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrivagoRoutingModule } from './trivago-routing.module';
import { MaterialModule } from './../core/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TrivagoPageComponent } from './components/trivago-page/trivago-page.component';
import { TrivagoFormComponent } from './components/trivago-form/trivago-form.component';
import { TrivagoTableComponent } from './components/trivago-table/trivago-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [TrivagoPageComponent, TrivagoFormComponent, TrivagoTableComponent],
  imports: [
    CommonModule,
    TrivagoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class TrivagoModule { }
