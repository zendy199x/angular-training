import { TabGroupComponent } from './tab-group.component';
import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: `app-tab-panel`,
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [``]
})

export class TabPanelComponent {
  @Input() title: string;
  @ViewChild(TemplateRef, { static: true }) panelBody: TemplateRef<unknown>;

  constructor(private tabGroup: TabGroupComponent) { }

  ngOnInit(): void {
    this.tabGroup.addTab(this);
  }
}
