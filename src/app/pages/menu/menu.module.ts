import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MenuRoutingModule, HeaderComponent],
})
export class MenuModule {}
