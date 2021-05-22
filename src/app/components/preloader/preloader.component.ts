import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {
  public loading: boolean;

  constructor() { 
    this.loading = true;
  }

  ngOnInit(): void {
    this.loaderHiiden();
  }

  loaderHiiden() {
    setTimeout( () => {
      const preloader = document.querySelector( '.preloader' );
      preloader.classList.add( 'opacity-0' );
    }, 1000);

    setTimeout( () => {
      this.loading = false
    }, 1700);
  }
}
