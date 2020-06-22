import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrivagoRoutingModule } from './trivago-routing.module';
import { MaterialModule } from './../core/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { TrivagoPageComponent } from './components/trivago-page/trivago-page.component';
import { TrivagoTableComponent } from './components/trivago-table/trivago-table.component';
import { TrivagoUploaderComponent } from './components/trivago-uploader/trivago-uploader.component';

@NgModule({
  declarations: [TrivagoPageComponent, TrivagoTableComponent, TrivagoUploaderComponent],
  imports: [
    CommonModule,
    TrivagoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class TrivagoModule { }
