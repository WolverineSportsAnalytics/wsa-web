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

  isMobile: Observable<BreakpointState>;
  submitted = false;
  signupFormGroup: FormGroup;

  constructor(private breakpointObserver: BreakpointObserver, private formBuilder: FormBuilder) {
    this.wsaLinkedin = 'https://www.linkedin.com/company/wolverinesportsanalytics/';
  }

  goToUrl(url: string) {
    location.href = url;
  }

  private scriptURL = 'https://script.google.com/macros/s/AKfycbwxTWdCD38lV6qLIxQuBJB9EIgQqqZ2wdZq8JMAogk9XKg11tXi/exec';
  signupForm = document.forms['signupForm'];

  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
    this.isMobile = this.breakpointObserver.observe([ Breakpoints.Handset, Breakpoints.Tablet ]);

    this.signupFormGroup = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()
    });

    this.signupForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid

    if (this.signupForm.invalid) {
        return;
    }

    const formObject = this.signupForm.getRawValue();
    const serializedForm = JSON.stringify(formObject);

    if (environment.production === false) {
      console.log(serializedForm);
    }

    fetch(this.scriptURL, { method: 'POST', body: serializedForm})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));

    // clear the form
    this.signupForm.reset();
    this.submitted = false;

    // resets the validation
    this.signupForm.controls.email.setErrors(null);
    this.signupForm.controls.firstName.setErrors(null);
    this.signupForm.controls.lastName.setErrors(null);
  }

}
