import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: `app-tabs`,
  template: `<ul class="nav nav-tabs my-4 mx-4">
 <li class="nav-item" *ngFor="let link of navs">
   <a class="nav-link" href="#">
     <ng-container *ngIf="linkTemplate;else noTemplate">
       <!-- <ng-container [ngTemplateOutlet]="linkTemplate" [ngTemplateOutletContext]="{link: link}"></ng-container> -->
       <ng-container *ngTemplateOutlet="linkTemplate; context: {$implicit: link}"></ng-container>
     </ng-container>
     <ng-template #noTemplate>{{link}}</ng-template>
   </a>
 </li>
</ul>`
})

export class TabsComponent {
  @Input() navs: string[];
  @Input() linkTemplate: TemplateRef<any>;
}
