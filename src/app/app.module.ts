import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BidiModule } from '@angular/cdk/bidi';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
//import { MatSidenavModule } from '@angular/material/sidenav';

import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './login/auth.service';
import { CommonDataService } from './shared/services/common-data.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { MichiganFootballComponent } from './michigan-football/michigan-football.component';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import {HttpClientInMemoryWebApiModule, InMemoryWebApiModule} from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrontPageComponent,
    LoginComponent,
    AboutComponent,
    TeamComponent,
    ProjectsComponent,
    ContactComponent,
    MichiganFootballComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    //MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
    //FlexLayoutModule,
  ],
  providers: [
    AuthService,
    CommonDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
