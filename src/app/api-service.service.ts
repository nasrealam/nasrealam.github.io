import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private _Url: string = "http://localhost:3000/dataMaintain";
  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post(this._Url, data);
  }
}
