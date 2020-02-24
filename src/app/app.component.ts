import { Component } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wolverine Sports Analytics';
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
}
