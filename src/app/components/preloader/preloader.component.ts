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
      this.loading = false;
    }, 1000);
  }

}
