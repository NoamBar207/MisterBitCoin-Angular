import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { ChartsComponent } from './pages/charts/charts.component';
import { ContactDeatailsComponent } from './pages/contact-deatails/contact-deatails.component';
import { ContactComponent } from './pages/contact.app/contact.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'edit/:id',
        component: EditContactComponent,
        resolve: { contact: ContactResolverService }
      },
      {
        path: 'edit',
        component: EditContactComponent
      },
    ]
  },
  {
    path: 'contact/:id',
    component: ContactDeatailsComponent,
    resolve: { contact: ContactResolverService },
  },
  {
    path: 'charts',
    component: ChartsComponent
  },
  {
    path: '',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
