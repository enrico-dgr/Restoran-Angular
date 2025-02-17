import { Component, HostListener, Input } from '@angular/core';
import { BookATableComponent } from './book-a-table/book-a-table.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [BookATableComponent, BreadcrumbComponent, NavbarComponent, NgIf],
})
export class HeaderComponent {
  @Input() pagination: boolean = true;
}
