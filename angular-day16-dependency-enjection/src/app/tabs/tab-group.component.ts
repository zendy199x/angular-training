import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TabPanelComponent } from './tab-panel.component';

@Component({
  selector: `app-tab-group`,
  template: `
		<div class="tab-headers">
			<div
				class="tab-header-item"
				*ngFor="let tab of tabPanelList; let idx = index"
				[class.active]="idx === activeIndex"
				(click)="activeIndexChange.emit(idx)"
			>
				{{ tab.title }}
				<button (click)="removeTab(tab)">x</button>
			</div>
		</div>

		<div class="tab-body" *ngIf="tabPanelList.length; else noTabs">
			<ng-container *ngTemplateOutlet="tabPanelList[activeIndex].panelBody">
			</ng-container>
		</div>

		<ng-template #noTabs>
			No more tab.
		</ng-template>
	`,
  styles: [`
    .tab-headers {
      display: flex;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #000;
      margin-bottom: 0.5rem;
    }

    .tab-header-item {
      margin-right: 0.5rem;
      padding: 5px 10px;
    }

    .tab-header-item.active {
      border: 1px solid red;
    }
  `],
})
export class TabGroupComponent {
  tabPanelList: TabPanelComponent[] = [];
  @Input() activeIndex = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  addTab(tab: TabPanelComponent): void {
    this.tabPanelList = [...this.tabPanelList, tab];
  }

  removeTab(tab: TabPanelComponent): void {
    let found = -1;
    this.tabPanelList = this.tabPanelList.filter((tp, index) => {
      if (tp === tab) {
        found = index;
        return false;
      }
      return true;
    });

    // [0, 1, 2, 3]
    // remove [0,1, 2]
    if (found === this.activeIndex) {
      this.activeIndexChange.emit(
        found === this.tabPanelList.length ? found - 1 : found
      );
    }
  }
}
