import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'progress-bar',
  template: `<div
  class="progress-bar-container"
  [style.backgroundColor]="backgroundColor"
>
  <div
    class="progress"
    [style]="{
      backgroundColor: progressColor,
      width: progress + '%'
    }"
  ></div>
</div>`,
  styles: [
    `
  .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
  `
  ]
})

export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';
  // tslint:disable-next-line: variable-name
  private $_progress = 50;
  @Input() get progress(): number {
    return this.$_progress;
  }
  set progress(val: number) {
    // validation for validation
    if (typeof val !== 'number') {
      const progress = Number(val);
      if (Number.isNaN(progress)) {
        this.$_progress = 0;
      } else {
        this.$_progress = progress;
      }
    }
    console.log({ val });
    this.$_progress = val;
  }

  constructor() {
    console.log({ progress: this.progress, backgroundColor: this.backgroundColor, progressColor: this.progressColor })
  }

  ngOnInit(): void {
    console.log('onInit', { progress: this.progress, backgroundColor: this.backgroundColor, progressColor: this.progressColor });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', { progress: this.progress, backgroundColor: this.backgroundColor, progressColor: this.progressColor });

    // if ('progress' in changes) {
    //   if (typeof changes['progress'].currentValue !== 'number') {
    //     const progress = Number(changes['progress'].currentValue);
    //     if (Number.isNaN(progress)) {
    //       this.progress = 0;
    //     } else {
    //       this.progress = progress;
    //     }
    //   }
    // }
  }
}
