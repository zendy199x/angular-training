import { Component, VERSION } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  isChecked: true;
}
