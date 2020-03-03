import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators} from '@angular/forms';

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

  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
  }

}
