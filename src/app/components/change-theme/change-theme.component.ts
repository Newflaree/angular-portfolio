import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
})
export class ChangeThemeComponent implements OnInit {
  darkSkin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme() {
    if ( this.darkSkin === false ) {
      this.darkSkin = true;
      document.body.className = 'dark';
    } else {
      this.darkSkin = false;
      document.body.className = '';
    } 
  }
}
