import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css'],
  providers: [ConcertService]
})
export class ConcertsComponent implements OnInit {
error:string;
concerts:any;
  constructor(private ConcertService: ConcertService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {

    this.ConcertService.getConcerts()
    .subscribe(result =>{
      this.concerts=result
    });

  }




}
