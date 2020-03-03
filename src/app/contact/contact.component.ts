import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;

  public wsaLinkedin: string;


  constructor() {
    this.wsaLinkedin = 'https://www.linkedin.com/company/wolverinesportsanalytics/';
  }

  goToUrl(url: string) {
    location.href = url;
  }

  ngOnInit(): void {
  }

}
