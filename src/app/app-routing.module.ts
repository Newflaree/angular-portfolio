import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Pages
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ServicesComponent} from './pages/services/services.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {ContactComponent} from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'about', 
    component: AboutComponent
  },
  {
    path: 'services', 
    component: ServicesComponent
  },
  {
    path: 'portfolio', 
    component: PortfolioComponent
  },
  {
    path: 'contact', 
    component: ContactComponent
  },
  {
    path: '**', 
    redirectTo: '/home'
  },
];

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ]
})
export class AppRoutingModule { }
