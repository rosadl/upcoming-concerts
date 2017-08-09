import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: string;
  username:string;
  password:string;
  admin:boolean;
  currentUser:{ object};
  constructor(private session: SessionService, private router : Router) { }
  ngOnInit() {

  }

  signup() {
    this.session.signup(this.username, this.password, this.admin)
      .subscribe(
        (user) => this.successOperation(user),
        (err) => this.error = err
      );

  }
  successOperation(user):any{
    this.currentUser = user ;
    if (user.admin == true){
    this.router.navigate(['admin-form'])
  }else{
      this.router.navigate(['user-form'])
  }
  }
}
