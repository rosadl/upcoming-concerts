
import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';
import { ClientComponent } from './client/client.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ConcertFormComponent } from './concert-form/concert-form.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { ConcertPageComponent } from './concert-page/concert-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user-form', component: ClientComponent },
  { path: 'admin-form', component: AdminComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'adminProfile/:id', component: AdminProfileComponent },
  { path: 'concert-form', component: ConcertFormComponent },
  { path: 'concerts', component: ConcertsComponent },
  { path: 'concerts/:id', component: ConcertPageComponent },
]
