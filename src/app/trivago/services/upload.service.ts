import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private SERVER_URL = `http://localhost:3000/trivago/`;
  constructor(public http: HttpClient) { }

  resetServerData(): Observable<any> {
    return this.http.post(`${this.SERVER_URL}`, []);
  }

  uploadSourceFiles(formData): Observable<any> {
    return this.http.post(`${this.SERVER_URL}source`, formData);
  }
}
