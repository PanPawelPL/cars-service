import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';

@Component({
  selector: 'cs-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit{

  car!: Car;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadCar();
  }

  loadCar(): void {
    this.car = this.route.snapshot.data['car'];
  };
 
}
