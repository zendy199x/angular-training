import { Component, VERSION } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  inputType = 'text';
  // DATA BINDING
  // EVENT BINDING

  user = {
    name: 'Zendy',
    age: 27
  };

  handler = (event: any) => {
    console.log('clicked', event);
  }
}
