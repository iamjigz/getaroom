import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Papa, ParseResult } from 'ngx-papaparse';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-trivago-form',
  templateUrl: './trivago-form.component.html',
  styleUrls: ['./trivago-form.component.scss']
})
export class TrivagoFormComponent implements OnInit {
  // data: any[];
  displayedColumns: any[];
  completed: number;

  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef; files = [];
  constructor(private papa: Papa, public table: TableService) { }

  ngOnInit(): void {
    this.displayedColumns = ['Date', 'PartnerRef', 'trivagoID', 'POS', 'Base Bid'];
  }

  private readFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.readFile(file);
    });
  }

  onClick() {
    this.table.data = [];
    this.completed = 0;

    const fileUpload = this.fileUpload.nativeElement; fileUpload.onchange = () => {
      for (const file of fileUpload.files) {
        this.files.push({ data: file, inProgress: false, progress: 0 });
      }
      this.readFiles();
    };
    fileUpload.click();
  }

  readFile(file) {
    const fileData = file.data;
    const fileSize = file.data.size;
    const matchDate = file.data.name.match(/\d{8}/);
    const fileDate = matchDate[0];
    let tempData = [];
    file.inProgress = true;

    console.log(fileDate);
    this.papa.parse(fileData, {
      header: true,
      worker: true,
      skipEmptyLines: true,
      chunk: (results, parser) => {
        // tslint:disable-next-line: no-string-literal
        const cursor = results.meta['cursor'];
        // tslint:disable-next-line: no-string-literal
        this.table.headers = results.meta['fields'];
        // this.table.data = [...this.table.data, ...results.data];

        tempData = [...tempData, ...results.data];
        file.progress = cursor / fileSize * 100;
      },
      complete: (result, csv) => {
        this.setDate(tempData, fileDate);
        file.progress = 100;
        file.inProgress = false;
        this.completed++;
      }
    });
  }

  private async setDate(array, date) {
    // tslint:disable-next-line: no-string-literal
    await array.map(row => row['Date'] = date);
    return this.table.data = [...this.table.data, ...array];
  }

  count() {
    const data = this.table.data;
    // tslint:disable-next-line: no-string-literal
    const count1 = data.reduce((acc, cur) => cur['Date'] === '20191205' ? acc++ : acc, 0);

    // tslint:disable-next-line: no-string-literal
    const count2 = data.reduce((acc, cur) => cur['Date'] === '20191206' ? acc++ : acc, 0);
    console.log(count1, count2);
  }
}
