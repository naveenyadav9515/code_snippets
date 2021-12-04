import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'key': 'cf7a59aad0574cad880143810210412',
      },
      params: {
        q: 'india',
        aqi: 'no',
      }
    };
    return this.http.get("http://api.weatherapi.com/v1/current.json", httpOptions)
  }
}
