import { Component, OnInit } from '@angular/core';

// Interfaces
import { Service } from 'src/app/interfaces/service-response';

// Services
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public services: Service[] = [];

  constructor(
    private servicesService: ServicesService
  ) { }

  ngOnInit(): void {
    /*
    this.servicesService.getService()
    .subscribe( resp => {
      this.services = resp.services;
    });
    */
  }

}
