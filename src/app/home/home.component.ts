import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../shared/models/user';
import { AuthService } from '../login/auth.service';
import { ProjectInterface } from '../shared/models/projects';
//import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loggedIn: boolean;
  public currentUser: User;
  public projects: ProjectInterface[];

  constructor(private router: Router, public dialog: MatDialog, private auth: AuthService) {
    this.loggedIn = this.isAuthenticated();
    
    this.projects = [];

    this.projects = [
      { name: 'Michigan Football Recruiting Project',
        // img: add later,
        routeName:'projects/michigan-football-recruiting-project'
      },

      {
        name: "Michigan Women's Basketball Project",
        routeName: ''
      }

    ];
  }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['']);
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.data) {
        if (this.isAuthenticated()) {
          this.currentUser = this.getUser();
        }
      }
    });
  }

  logout() {
    this.loggedIn = !this.auth.isAuthenticated();
    return this.loggedIn;
  }

  isAuthenticated(): boolean {
    this.loggedIn = this.auth.isAuthenticated();
    return this.loggedIn;
  }

  getUser(): User {
    return this.auth.getUser();
  }

}
