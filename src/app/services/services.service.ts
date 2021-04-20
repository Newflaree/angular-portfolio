import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces
import { ServiceResponse } from '../interfaces/service-response';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient
  ) { }

  getService():Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>( 'http://localhost:3000/api/services/' );
  }
}
