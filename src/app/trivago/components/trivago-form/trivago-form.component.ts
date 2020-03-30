import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Papa, ParseResult } from 'ngx-papaparse';

@Component({
  selector: 'app-trivago-form',
  templateUrl: './trivago-form.component.html',
  styleUrls: ['./trivago-form.component.scss']
})
export class TrivagoFormComponent implements OnInit {
  data: any[];
  completed: number;

  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef; files = [];
  constructor(private papa: Papa) { }

  ngOnInit(): void {
  }

  private readFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.readFile(file);
    });
  }

  onClick() {
    this.data = [];
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
    file.inProgress = true;

    this.papa.parse(fileData, {
      header: true,
      worker: true,
      skipEmptyLines: true,
      chunk: (results: ParseResult, parser) => {
        // tslint:disable-next-line: no-string-literal
        const cursor = results.meta['cursor'];

        file.progress = cursor / fileSize * 100;
        this.data = [...this.data, ...results.data];
      },
      complete: (result, csv) => {
        file.progress = 100;
        file.inProgress = false;
        this.completed++;
      }
    });
  }
}
