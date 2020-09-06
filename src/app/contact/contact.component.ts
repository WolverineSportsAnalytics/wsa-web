import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;

  public wsaLinkedin: string;
  public signUp: string;

  isMobile: Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver, private formBuilder: FormBuilder) {
    this.wsaLinkedin = 'https://www.linkedin.com/company/wolverinesportsanalytics/';
    this.signUp = 'https://forms.gle/4Gr4582SyJ9V77Bj8';
  }

  goToUrl(url: string) {
    location.href = url;
  }

  ngOnInit() {
    this.isMobile = this.breakpointObserver.observe([ Breakpoints.Handset, Breakpoints.Tablet ]);
  }
}
