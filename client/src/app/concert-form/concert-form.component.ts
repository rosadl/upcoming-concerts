import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConcertService } from '../services/concert.service';
import {SessionService} from '../services/session.service';

@Component({
  selector: 'app-concert-form',
  templateUrl: './concert-form.component.html',
  styleUrls: ['./concert-form.component.css'],
  providers: [ConcertService],
})
export class ConcertFormComponent implements OnInit {
  user:any;
  formInfo  = {
    artist: '',
    date: Date,
    capacity: Number,
    imgUrl:'',
    summary:'',
    userID:'',

  }
  result : any;
    error: string;
    constructor(private concert: ConcertService,private session: SessionService , private router : Router) { }

  ngOnInit() {
      this.session.isLoggedIn().subscribe(result=>this.user=result)
  }
  new() {
  this.formInfo.userID=this.user._id;
   this.concert.newConcert(this.formInfo)
     .subscribe(
       (formInfo) => {
        this.result= formInfo} ,
       (err) => this.error = err
     );
     this.router.navigate(['adminProfile/', this.user._id])
  }
}
