import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  public date = new Date().getFullYear();
  public toggler: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNav() {
    const nav = document.querySelector( 'aside' );
    const navTog = document.querySelector( '.nav-toggler' );

    navTog.classList.toggle( 'open' );
    nav.classList.toggle( 'open' );
  }
}
