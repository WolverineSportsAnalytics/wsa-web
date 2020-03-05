import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ProjectInterface } from '../shared/models/projects';
import { MatIconRegistry } from '@angular/material/icon';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: ProjectInterface[];
  public breakpoint;
  public rowflex;
  faExternalLinkAlt = faExternalLinkAlt;

  isMobile: Observable<BreakpointState>;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    this.projects = [];
    this.projects = [
      { name: 'Michigan Football Recruiting Project',
        // img: add later,
        routeName: '/projects/michigan-football-recruiting-project',
        years: 'Jan. 2018 - April 2018'
      },

      {
        name: "Michigan Women's Basketball Project",
        routeName: '/projects/michigan-wbb-project',
        years: 'Sep. 2019 - Present'
      },

      {
        name: "Michigan Hockey Project",
        routeName: '/projects/michigan-hockey-project',
        years: 'May 2020 - Present'
      },

      {
        name: "NBA Fanduel Optimizer",
        routeName: '/projects/fanduel-optimizer',
        years: 'Sep. 2017 - April 2019'
      }
    ];

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

  goToContact() {
    this.router.navigate(['/contact']);
  }

  ngOnInit(): void {
    this.isMobile = this.breakpointObserver.observe([ Breakpoints.Handset, Breakpoints.Tablet ]);
  }

}
