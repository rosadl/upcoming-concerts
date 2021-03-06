
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SessionService } from './services/session.service';
import { AdminService } from './services/admin.service';
import { AssistantService } from './services/assistant.service';
import { ClientService } from './services/client.service';
import { ConcertService } from './services/concert.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routing';
import { ClientComponent } from './client/client.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ConcertFormComponent } from './concert-form/concert-form.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { ConcertPageComponent } from './concert-page/concert-page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupComponent,
    ClientComponent,
    ProfileComponent,
    AdminComponent,
    AdminProfileComponent,
    ConcertFormComponent,
    ConcertsComponent,
    ConcertPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [SessionService, AdminService, AssistantService, ClientService, ConcertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
