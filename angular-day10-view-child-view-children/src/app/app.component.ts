import { Component, VERSION, ViewChild, ViewChildren, ElementRef, ViewContainerRef, QueryList } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren(ToggleComponent) toggleComp: QueryList<ToggleComponent>;
  // @ViewChild(ToggleComponent, { static: true }) toggleComp: ToggleComponent;
  @ViewChild('toggleButton', { static: true }) toggleBtn: ElementRef<HTMLButtonElement>;
  @ViewChild('nameInput', { static: true, read: ViewContainerRef }) nameInput: ElementRef<HTMLButtonElement>;

  name = 'Angular ' + VERSION.major;
  isChecked: true;
  showLast = true;

  ngOnInit() {
    // setTimeout(() => {
    //   this.nameInput.nativeElement.focus();
    // }, 3000);
    console.log(this.nameInput);
    // console.log('onInit', this.toggleComp, this.toggleBtn);
    // this.toggleComp.changes.subscribe(console.log);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.toggleComp);
    this.toggleComp.changes.subscribe(console.log);
  }
}
