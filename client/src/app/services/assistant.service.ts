import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

export interface Assistant {
  _id: string,
clientId: string,
concertId: string,
}


@Injectable()
export class AssistantService {
  assistant: Assistant
  BASE_URL: string = `${environment.BASE_URL}`
  options: object = { withCredentials: true };
    constructor(private http: Http, private router : Router) {}

    newAssistant(content){
      return this.http.post(`${this.BASE_URL}/concerts/${content.concertId}/assistants`,content, this.options)
        .map((res) => res.json());
    }
    getAssistants(content){
      return this.http.get(`${this.BASE_URL}/concerts/${content.concertId}/assistants`, this.options)
        .map((res) => res.json());
    }
}
