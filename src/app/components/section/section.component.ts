import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() className: string = '';
  @Input() containerClassName: string = '';
  @ViewChild('sectionContainer') sectionRef!: ElementRef;

  get classNameOuterDiv(): string {
    return `container-xxl py-5 ${this.containerClassName}`.trim();
  }

  get classNameDiv(): string {
    return `container ${this.className}`.trim();
  }
}
