import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface records {
  id: number;
  name: string;
  company:string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<records[]>(this.url);
  }
  putData(data:any){
    return this.http.post(this.url,data);
  }

  deleteRecord(id:any){
    return this.http.delete(this.url+"/"+id)
  }

  updateRecord(data:any){
    return this.http.put(this.url+"/"+data.id,data);
  }

  getFile(url:any) {
    return this.http.get(url, { responseType: "blob" });
  }
  
  upload(file: any): Observable<any> {
    const endpoint = 'https://v2.convertapi.com/upload';
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(endpoint, formData);
  }

}
