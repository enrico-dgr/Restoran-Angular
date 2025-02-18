import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import routes from 'src/utils/routes';
import { BreadcrumbItemComponent } from './item/item.component';

@Component({
  selector: 'app-header-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  imports: [CommonModule, BreadcrumbItemComponent],
  standalone: true,
})
export class BreadcrumbComponent {
  constructor(private router: Router) {}

  activeRoute$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(event => {
      const activeKey = Object.keys(routes).find(
        key =>
          routes[key as keyof typeof routes].absolutePath ===
          (event as NavigationEnd).url,
      ) as keyof typeof routes;

      return activeKey ? routes[activeKey] : undefined;
    }),
  );

  activeRoutePath$ = this.activeRoute$.pipe(
    map(route => {
      const routePath = route?.publicPath || '';

      return routePath.split('/').filter(Boolean);
    }),
  );
}
