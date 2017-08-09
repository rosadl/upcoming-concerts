import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

export interface Admin {
  _id: string,
  name: string,
  location: string,
  email: string,
  description: string,
  capacity: number,
  imgUrl: string,
  updated_at: Date,
  created_at: Date
}

@Injectable()
export class AdminService {
  admin:Admin
  BASE_URL: string = `${environment.BASE_URL}/admins`
  options: object = { withCredentials: true };

  constructor(private http: Http, private router : Router) {}

  getAdmin(id) {
    return this.http.get(`${this.BASE_URL}/${id}`, this.options)
      .map((res) => res.json());
  }

  newAdmin(content){
    return this.http.post(`${this.BASE_URL}/new`,content, this.options)
      .map((res) => res.json());
  }

}
