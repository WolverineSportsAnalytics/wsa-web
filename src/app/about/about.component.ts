import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    public breakpoint;
    public rowflex;
    public wsaLogo;

    constructor() {
      if (window.innerWidth <= 400) {
        this.breakpoint = 1;
        this.rowflex = 450;
      } else if (window.innerWidth <= 700) {
        this.breakpoint = 2;
        this.rowflex = 400;
      } else if (window.innerWidth <= 1050) {
        this.breakpoint = 3;
        this.rowflex = 475;
      } else {
        this.breakpoint = 4;
        this.rowflex = 500;
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
