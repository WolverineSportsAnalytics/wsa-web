import { Component, OnInit } from '@angular/core';
import { PersonInterface } from '../shared/models/person';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public persons: PersonInterface[];
  public breakpoint;
  public wsaLogo;

  constructor() {
    this.persons = [];
    this.persons = [
      {name: 'Brendan Hart', title: 'Founder', img: environment.imageURL + 'BrendanHartWSA.jpg'},
      {name: 'Evan Ciancio', title: 'Board', img: environment.imageURL + 'EvanCiancio.jpg' },
      {name: 'Jake Becker', title: 'Board', img: environment.imageURL + 'JakeBecker.jpg'},
      {name: 'Phillip Mathew', title: 'Board', img: environment.imageURL + 'phillipmathew.jpg'},
      {name: 'Justin Liss', title: 'Co-President', img: environment.imageURL + 'JustinLiss.jpg'},
      {name: 'Cindy Gu', title: 'Co-President', img: environment.imageURL + 'CindyGu.jpg'},
      {name: 'Erin Haley', title: 'Outreach Coordinator', img: environment.imageURL + 'ErinHaley.jpg'}
    ];

    if (window.innerWidth <= 400) {
      this.breakpoint = 1;
    } else if (window.innerWidth <= 700) {
      this.breakpoint = 2;
    } else if (window.innerWidth <= 1050) {
      this.breakpoint = 3;
    } else {
      this.breakpoint = 4;
    }
  }

  onResize(event) {
    if (event.target.innerWidth <= 400) {
      this.breakpoint = 1;
    } else if (event.target.innerWidth <= 700) {
      this.breakpoint = 2;
    } else if (event.target.innerWidth <= 1050) {
      this.breakpoint = 3;
    } else {
      this.breakpoint = 4;
    }
  }

  ngOnInit() {
  }

}
