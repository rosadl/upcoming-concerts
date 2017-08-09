import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  error: string;
  username:string;
  password:string;
  admin:boolean;
  currentUser:{ object};
  constructor(private session: SessionService, private router : Router) { }
  ngOnInit() {

  }

  login() {
    this.session.login(this.username, this.password)
      .subscribe(
        (user) => this.successOperation(user),
        (err) => this.error = err
      );


  }
  successOperation(user):any{
    this.currentUser = user ;
      if (user.admin == true){
      this.router.navigate(['adminProfile/', user._id])
    }else{
        this.router.navigate(['profile/', user._id])
    }
  }

  }
