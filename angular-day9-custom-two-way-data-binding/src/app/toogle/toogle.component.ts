import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toogle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.css']
})
export class ToogleComponent implements OnInit {
  @Input() checked: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  // toggle(): void {
  //   this.checked = !this.checked;
  //   this.checkedChange.emit(this.checked);
  // }

}
