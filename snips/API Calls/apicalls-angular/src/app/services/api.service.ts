import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { records } from '../api-calls/table-model'

export interface records {
  id: number;
  name: string;
  company:string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<records[]>("http://localhost:3000/users");
  }
  putData(data:any){
    return this.http.post("http://localhost:3000/users",data);
  }

  deleteRecord(id:any){
    return this.http.delete("http://localhost:3000/users/"+id)
  }

  updateRecord(data:any){
    return this.http.put("http://localhost:3000/users/"+data.id,data);
  }

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
