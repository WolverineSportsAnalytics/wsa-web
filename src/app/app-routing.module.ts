import { Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardService } from './shared/services/login-guard.service';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { MichiganFootballComponent } from './michigan-football/michigan-football.component';

export const routes: Routes = [
  { path: '', component:FrontPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: 'team', component: TeamComponent},
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'projects/michigan-football-project', component: MichiganFootballComponent}
  //{ path: 'home/sports', loadChildren: './sports/sports.module#SportsModule', canActivate: [LoginGuardService]}
];
