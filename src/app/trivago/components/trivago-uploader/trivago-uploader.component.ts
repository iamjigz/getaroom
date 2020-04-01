import { Component, OnInit } from '@angular/core';
import { FileUploadValidators, FileUploadControl } from '@iplab/ngx-file-upload';

@Component({
  selector: 'app-trivago-uploader',
  templateUrl: './trivago-uploader.component.html',
  styleUrls: ['./trivago-uploader.component.scss']
})
export class TrivagoUploaderComponent implements OnInit {
  public fileUploadControl = new FileUploadControl(FileUploadValidators.filesLimit(35));
  public files: Array<{ data, progress }>;
  public show = true;

  constructor() { }

  ngOnInit(): void {
  }

  private toggleListVisibility() {
    this.fileUploadControl.setListVisibility(!this.fileUploadControl.isListVisible);
  }

  public clear(): void {
    this.fileUploadControl.clear();
    this.files = [];
    this.show = true;
  }

  public onClick(): void {
    this.files = [];
    this.show = false;
    this.toggleListVisibility();
    this.fileUploadControl.value.map(file => this.files.push({ data: file, progress: 0 }));
  }
}
