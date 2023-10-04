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

  addCar(data: Car): Observable<Car>{
    return this.http.post( this.apiURL, data, { responseType: 'json'}) as Observable<Car>;
  }

  updateCar(id: number, data: Car): Observable<Car> {
    return this.http.put(this.apiURL + `/${id}`, data, { responseType: 'json'}) as Observable<Car>;
  }

  removeCar(id: number): Observable<Car> {
    return this.http.delete(this.apiURL + `/${id}`, { responseType: 'json'}) as Observable<Car>;
  }

}
