import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public date = new Date().getFullYear();
  public toggler: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNav() {
    const nav = document.querySelector( 'aside' );
    nav.classList.toggle( 'open' );
  }
}
