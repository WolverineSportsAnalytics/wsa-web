import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../shared/models/user';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loggedIn: boolean;
  public currentUser: User;

  constructor(private router: Router, public dialog: MatDialog, private auth: AuthService) {
    this.loggedIn = this.isAuthenticated();
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

  isAuthenticated(): boolean {
    this.loggedIn = this.auth.isAuthenticated();
    return this.loggedIn;
  }

  getUser(): User {
    return this.auth.getUser();
  }

}
