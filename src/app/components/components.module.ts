import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { PreloaderComponent } from './preloader/preloader.component';



@NgModule({
  declarations: [NavbarComponent, PreloaderComponent],
  exports: [
    NavbarComponent,
    PreloaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
