import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  url:'http://localhost:8000/user.'
  constructor( private http:HttpClient) { }

  AllGetuder() {
  return this.http.get(this.url).toPromise();
}
}
