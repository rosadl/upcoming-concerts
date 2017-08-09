import { Component } from '@angular/core';
import { SessionService } from './services/session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SessionService]
})
export class AppComponent {
  title = 'app';
  constructor(private session:SessionService, private router : Router){ }

  logout(){
    this.session.logout().subscribe();{
    this.router.navigate(['']);
  }
  }
}
