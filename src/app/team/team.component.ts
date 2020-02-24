import { Component, OnInit } from '@angular/core';
import { PersonInterface } from '../shared/models/person';
import { environment } from '../../environments/environment';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public persons: PersonInterface[];
  public breakpoint;
  public rowflex;
  public wsaLogo;

  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;

  constructor() {
    this.persons = [];
    this.persons = [
      { name: 'Justin Liss',
        title: 'Co-President',
        img: environment.imageURL + 'JustinLiss.jpg',
        linkedin: 'https://www.linkedin.com/in/justinliss/',
        github: 'https://github.com/justinliss?tab=repositories'
      },

      { name: 'Cindy Gu',
        title: 'Co-President',
        img: environment.imageURL + 'CindyGu.jpg',
        linkedin: 'https://www.linkedin.com/in/cindyjgu/',
        github: 'https://github.com/cindygu4'
      },

      { name: 'Erin Haley',
        title: 'Outreach Coordinator',
        img: environment.imageURL + 'ErinHaley.jpg',
        linkedin: 'https://www.linkedin.com/in/erinahaley/',
        github: 'https://github.com/erinhale'
      },

      { name: 'Brendan Hart',
        title: 'Founder',
        img: environment.imageURL + 'BrendanHartWSA.jpg',
        linkedin: 'https://www.linkedin.com/in/hbrendan/',
        github: 'https://github.com/brendanahart'
      },

      { name: 'Evan Ciancio',
        title: 'Board',
        img: environment.imageURL + 'EvanCiancio.jpg',
        linkedin: 'https://www.linkedin.com/in/evan-ciancio-69ba65146/',
        github: 'https://github.com/eciancio'
      },

      { name: 'Jake Becker',
        title: 'Board',
        img: environment.imageURL + 'JakeBecker.jpg',
        linkedin: 'https://www.linkedin.com/in/jakegbecker/',
        github: 'none'
      },

      { name: 'Phillip Mathew',
        title: 'Board',
        img: environment.imageURL + 'PhillipMathew.jpg',
        linkedin: 'https://www.linkedin.com/in/phillip-mathew/',
        github: 'https://github.com/phillipmathew314'
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

  ngOnInit() {
  }

}
