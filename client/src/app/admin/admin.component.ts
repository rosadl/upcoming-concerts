import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import {SessionService} from '../services/session.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService],
})
export class AdminComponent implements OnInit {
  user:any;
  formInfo  = {

    name: '',
    location: '',
    email: '',
    description:'',
    userID:''
  }

    error: string;
    constructor(private admin: AdminService,private session: SessionService , private router : Router) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe(result=>this.user=result)
  }
  new() {
    console.log(this.user)
  this.formInfo.userID=this.user._id;
   this.admin.newAdmin(this.formInfo)
     .subscribe(
       (admin) => console.log(admin),
       (err) => this.error = err
     );

 }

}
