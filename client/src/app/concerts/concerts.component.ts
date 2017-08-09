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
$:any;
error:string;
concerts:any;
  constructor(private concert: ConcertService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.concert.getConcerts()
    .subscribe(result =>this.concerts=result);
  }

 event() {
            var sideslider = this.$('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event){
                this.$(sel).toggleClass('in');
                this.$(sel2).toggleClass('out');
            });
}
}
