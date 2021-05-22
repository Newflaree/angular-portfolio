import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { ChangeThemeComponent } from './change-theme/change-theme.component';
import { LightboxComponent } from './lightbox/lightbox.component';



@NgModule({
  declarations: [
    NavbarComponent, 
    PreloaderComponent, 
    ChangeThemeComponent, 
    LightboxComponent
  ],
  exports: [
    NavbarComponent,
    LightboxComponent,
    PreloaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
