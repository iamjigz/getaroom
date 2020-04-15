import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ParserService {
  public data = [];
  public headers = [];

  constructor(private papa: Papa) { }

  public parse(file) {
    const fileData = file.data;
    const fileSize = file.data.size;
    const matchDate = file.data.name.match(/\d{8}/);
    const fileDate = matchDate[0];

    this.papa.parse(fileData, {
      header: true,
      worker: true,
      skipEmptyLines: true,
      chunk: (results, parser) => {
        // tslint:disable-next-line: no-string-literal
        const cursor = results.meta['cursor'];
        // tslint:disable-next-line: no-string-literal
        this.headers = results.meta['fields'];
        this.data = [...this.data, ...results.data];
        file.progress = cursor / fileSize * 100;
      },
      complete: (result, csv) => {
        // this.setDate(tempData, fileDate);
        file.progress = 100;
        // this.inProgress--;
      }
    });
  }
}
