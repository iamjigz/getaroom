import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Injectable({
  providedIn: 'root'
})
export class PapaparseService {
  constructor(public papa: Papa) { }

  public parse(file): any {
    console.log(file);
    this.papa.parse(file.data, {
      header: true,
      worker: true,
      skipEmptyLines: true,
      chunk: (results, parser) => {
        console.log('Row data:', results.data.length);
        console.log('Row errors:', results.errors);
      },
      complete: (result, csv) => {
        console.log('Complete', result.data);
        return result.data;
      }
    });
  }
}
