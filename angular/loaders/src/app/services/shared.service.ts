import { Injectable } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public isLoader: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  
  url = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url);
  }

}
