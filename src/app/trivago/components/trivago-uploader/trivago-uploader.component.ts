import { Component, OnInit } from '@angular/core';
import { FileUploadValidators, FileUploadControl } from '@iplab/ngx-file-upload';
import { Papa } from 'ngx-papaparse';
import { TableService } from '../../services/table.service';
import { UploadService } from '../../services/upload.service';

import * as moment from 'moment';

@Component({
  selector: 'app-trivago-uploader',
  templateUrl: './trivago-uploader.component.html',
  styleUrls: ['./trivago-uploader.component.scss']
})
export class TrivagoUploaderComponent implements OnInit {
  public fileUploadControl = new FileUploadControl(FileUploadValidators.filesLimit(35));
  public files: Array<any>;
  public show = true;
  public inProgress = 0;
  public displayedColumns: any[];

  constructor(private papa: Papa, public uploader: UploadService, public table: TableService) { }

  ngOnInit(): void {
    this.displayedColumns = ['Date', 'PartnerRef', 'trivagoID', 'POS', 'Base Bid'];
  }

  private toggleListVisibility() {
    this.fileUploadControl.setListVisibility(!this.fileUploadControl.isListVisible);
  }

  public clear(): void {
    this.fileUploadControl.clear();
    this.files = [];
    this.show = true;
    this.inProgress = 0;
  }

  public export(): void {
    const csv = this.papa.unparse(this.table.data);
    const blob = new Blob([csv]);
    const a = window.document.createElement('a');

    a.href = window.URL.createObjectURL(blob);
    a.download = `Trivago Bid Compiler.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  public onClick(): void {
    this.table.data = this.files = [];
    this.show = false;
    this.toggleListVisibility();
    // this.fileUploadControl.value.map(file => this.files.push(file));
    // this.inProgress = this.files.length;
    // this.files.map(file => this.parse(file));
    console.log('files', this.files);
    this.uploadFiles(this.fileUploadControl.value);
  }

  uploadFiles(files) {
    const formData = new FormData();

    for (const file of files) {
      formData.append('files', file);
    }

    this.uploader.uploadSourceFiles(formData).subscribe(res => {
      console.log('Upload Complete', res);
    });
  }


  // TODO: transfer all logic to service instead
  private parse(file) {
    const fileData = file.data;
    const fileSize = file.data.size;
    const matchDate = file.data.name.match(/\d{8}/);
    const fileDate = matchDate[0];
    let tempData = [];

    this.papa.parse(fileData, {
      header: true,
      worker: true,
      skipEmptyLines: true,
      chunk: (results, parser) => {
        // tslint:disable-next-line: no-string-literal
        const cursor = results.meta['cursor'];
        // tslint:disable-next-line: no-string-literal
        this.table.headers = results.meta['fields'];
        tempData = [...tempData, ...results.data];
        file.progress = cursor / fileSize * 100;
      },
      complete: (result, csv) => {
        this.setDate(tempData, fileDate);
        file.progress = 100;
        this.inProgress--;
      }
    });
  }

  private async setDate(array, date) {
    const d = moment(date, 'YYYYMMDD').format('MMM DD YYYY');
    // tslint:disable-next-line: no-string-literal
    await array.map(row => row['Date'] = d);
    return this.table.data = [...this.table.data, ...array];
  }


}
