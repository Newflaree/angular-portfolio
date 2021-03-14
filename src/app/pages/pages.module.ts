import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [HomeComponent, AboutComponent, ServicesComponent, PortfolioComponent, ContactComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
