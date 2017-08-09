import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

export interface Concert {
  _id: string,
  artist: string,
  summary: string,
  date: Date,
  updated_at: Date,
  created_at: Date
}

@Injectable()
export class ConcertService {
  concert:Concert
  BASE_URL: string = `${environment.BASE_URL}`
  options: object = { withCredentials: true };

    constructor(private http: Http, private router : Router) {}

    newConcert(content){
      return this.http.post(`${this.BASE_URL}/concert/new`,content, this.options)
        .map((res) => res.json());
    }
getConcerts(){
  return this.http.get(`${this.BASE_URL}/concerts`, this.options)
    .map((res) => res.json());
}
getConcert(id){
  return this.http.get(`${this.BASE_URL}/concerts/${id}`, this.options)
    .map((res) => res.json());
}
getRecomended(content){
  console.log(content)
  return this.http.get(`${this.BASE_URL}/concerts/artist/${content.name}`, this.options)
    .map((res) => res.json());
}
}
