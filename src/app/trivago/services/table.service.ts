import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private tableData: any;
  private tableHeaders: any;

  constructor() { }

  public get data() {
    return this.tableData;
  }

  public set data(newData) {
    this.tableData = newData;
  }

  public get headers() {
    return this.tableHeaders;
  }

  public set headers(newHeaders) {
    this.tableHeaders = newHeaders;
  }
}
