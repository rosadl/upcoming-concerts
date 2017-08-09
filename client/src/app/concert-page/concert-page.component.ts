import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConcertService } from '../services/concert.service';
import {AssistantService} from '../services/assistant.service'
import {SessionService} from '../services/session.service'
import {ClientService} from '../services/client.service'

@Component({
  selector: 'app-concert-page',
  templateUrl: './concert-page.component.html',
  styleUrls: ['./concert-page.component.css'],
  providers: [ConcertService, AssistantService, SessionService, ClientService]
})
export class ConcertPageComponent implements OnInit {
  concertProfile: any;
  user: any;
  client: any;
  assistants = []
  specs = [];
  recommendations = []
  contentForm = {
    concertId: '',
    clientId: '',
    similarArtist: []
  }

  constructor(private concert: ConcertService,
    private assistantService: AssistantService,
    private sessionService: SessionService,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sessionService.isLoggedIn().subscribe(result => {
      this.user = result;
      this.clientService.getClient(this.user._id).subscribe(result => {
        this.client = result;
        this.contentForm.clientId = this.client[0]._id;

      }
      )
    }
    )


    this.route.params
      .subscribe((params) => {
        this.concert.getConcert(params.id).subscribe(result => {
          this.concertProfile = result;

          this.contentForm.concertId = this.concertProfile._id;
          this.contentForm.similarArtist = this.concertProfile.similarArtist;
          this.assistantService.getAssistants(this.contentForm)
            .subscribe(result => this.assistants = result);
        }
        );
      })
  }


  assistButton() {
    console.log(this.contentForm.similarArtist[0])
    this.addSpec(this.client[0].name);
    console.log(this.contentForm)
    this.assistantService.newAssistant(this.contentForm)
      .subscribe(result => this.contentForm = result);
    for (var i = 0; i < this.contentForm.similarArtist.length; i++) {
      this.concert.getRecomended({ name: this.contentForm.similarArtist[i] })
        // .subscribe(result=>console.log(result))
        .subscribe(result => {
          if (result.length == 1) {
            this.recommendations.push(result)
          }
        })
      console.log(this.recommendations)
    }
  }

  addSpec(valor) {
    this.specs.push(valor)
  };

  reset() {
    this.specs = []
    this.recommendations = []
  }
}
