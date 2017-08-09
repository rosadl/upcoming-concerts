import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css'],
  providers: [AdminService],
})
export class AdminProfileComponent implements OnInit {
  userID: string;
  profile: any;

  constructor(private admin: AdminService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
  .subscribe((params) => {
    console.log(params);
    this.admin.getAdmin(params.id).subscribe( result => this.profile= result);
  })
  }

}
