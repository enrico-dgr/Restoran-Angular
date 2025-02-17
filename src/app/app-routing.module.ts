import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./pages/booking/booking.module').then(m => m.BookingModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./pages/menu/menu.module').then(m => m.MenuModule),
  },
  {
    path: 'our-team',
    loadChildren: () =>
      import('./pages/our-team/our-team.module').then(m => m.OurTeamModule),
  },
  {
    path: 'service',
    loadChildren: () =>
      import('./pages/service/service.module').then(m => m.ServiceModule),
  },
  {
    path: 'testimonial',
    loadChildren: () =>
      import('./pages/testimonial/testimonial.module').then(
        m => m.TestimonialModule,
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
