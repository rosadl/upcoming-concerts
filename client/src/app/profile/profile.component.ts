import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ClientService]
})
export class ProfileComponent implements OnInit {
userID: string;
profile: any;

  constructor(private client: ClientService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
  .subscribe((params) => {
    console.log(params);
    this.client.getClient(params.id).subscribe( result => this.profile= result);
  })

  }
}
