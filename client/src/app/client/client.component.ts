import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import {SessionService} from '../services/session.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [ClientService],
})
export class ClientComponent implements OnInit {
user:any;
formInfo  = {

  name: '',
  lastName: '',
  city: '',
  email: '',
  userID:''
}

  error: string;
  constructor(private client: ClientService,private session: SessionService , private router : Router) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe(result=>this.user=result)
  }
  new() {
    console.log(this.user)
  this.formInfo.userID=this.user._id;
   this.client.newClient(this.formInfo)
     .subscribe(
       (client) => console.log(client),
       (err) => this.error = err
     );

 }

}
