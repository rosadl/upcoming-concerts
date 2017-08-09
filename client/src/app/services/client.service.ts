import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

export interface Client {
  _id: string,
  name: string,
  lastName: string,
  city: string,
  email: string,
  imgUrl: string,
  updated_at: Date,
  created_at: Date
}

@Injectable()
export class ClientService {
  client:Client
  BASE_URL: string = `${environment.BASE_URL}/clients`
  options: object = { withCredentials: true };
    constructor(private http: Http, private router : Router) {}

    getClient(id) {
      return this.http.get(`${this.BASE_URL}/${id}`, this.options)
        .map((res) => res.json());
    }

    newClient(content){
      return this.http.post(`${this.BASE_URL}/new`,content, this.options)
        .map((res) => res.json());
    }

    edit(id){
      return this.http.put(`${this.BASE_URL}/clients/${this.client._id}/edit`, this.client, this.options)
        .map((res) => res.json());
    }

    remove(id) {
      return this.http.delete(`${this.BASE_URL}/clients/${id}/delete`, this.options)
        .map((res) => res.json());
    }

}
