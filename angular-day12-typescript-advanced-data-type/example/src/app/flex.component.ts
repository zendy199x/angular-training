import { Component, Input, HostBinding } from '@angular/core';

type flexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

@Component({
  selector: `app-flex-container`,
  template: `<ng-content></ng-content>`,
})

export class FlexComponent {
  @Input() flexDirection: flexDirection = 'row';

  // tslint:disable-next-line: typedef
  @HostBinding('style.display') get display() {
    return 'flex';
  }

  // tslint:disable-next-line: typedef
  @HostBinding('style.flex-direction') get direction() {
    return this.flexDirection;
  }
}
