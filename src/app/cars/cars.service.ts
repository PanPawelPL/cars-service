import { Injectable } from '@angular/core';
import { Car } from './models/car';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
 
@Injectable()
export class CarsService {

  private apiURL = "http://localhost:3000/api/cars";

  constructor(
    private http: HttpClient
  ) { }

  getCars(): Observable<Car[]> {
    return this.http.request( 'GET', this.apiURL, { responseType: 'json'}) as Observable<Car[]>;
  }

  getCar(id: number): Observable<Car> {
    return this.http.request( 'GET', this.apiURL + `/${id}`, { responseType: 'json'}) as Observable<Car>;
  }
}
