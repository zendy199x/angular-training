import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): any {
  }

  toggle(): any {
    this.checkedChange.emit(!this.checked);
  }
}
