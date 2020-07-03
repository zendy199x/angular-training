import { Component, VERSION } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  isDanger = false;
  isWarning = false;

  classes = 'box red-border yellow-background';
}
