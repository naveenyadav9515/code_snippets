import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getFile(url:any) {
    return this.http.get(url, { responseType: "blob" });
  }
  
  upload(file: any): Observable<any> {
    const endpoint = 'https://v2.convertapi.com/upload ';
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(endpoint, formData);
  }

}
