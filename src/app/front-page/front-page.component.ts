import { Component, OnInit } from '@angular/core';
import { PersonInterface } from '../shared/models/person';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  public breakpoint;
  public wsaLogo;

  constructor() {

    this.wsaLogo = environment.imageURL + 'tile.png';

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
