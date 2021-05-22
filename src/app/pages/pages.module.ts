import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ComponentsModule } from '../components/components.module';

// Pages
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent, 
    AboutComponent, 
    ServicesComponent, 
    PortfolioComponent, 
    ContactComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
