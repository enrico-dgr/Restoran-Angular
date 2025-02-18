import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import routes from 'src/utils/routes';

@Component({
  selector: 'header-breadcrumb-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class BreadcrumbItemComponent {
  @Input() section: string = '';
  @Input() last: boolean = false;

  correspondingRoute = Object.entries(routes).find(([key]) =>
    routes[key as keyof typeof routes].absolutePath.includes(this.section),
  )?.[1];
}
