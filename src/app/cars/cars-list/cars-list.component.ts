import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {

  totalCost: number = 0;
  grossCost: number = 0;

  @ViewChild('totalCostRef') totalCostRef!: TotalCostComponent

  cars: Car[] = [];

  constructor(
    private carsService: CarsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCars();
  }

  ngAfterViewInit(): void {
    this.showGross();
  }

  loadCars(): void {
    this.carsService.getCars().subscribe( cars => {
      this.cars = cars;
      this.countTotalCost();
    })
  }

  goToCarDetails(car: Car) {
    this.router.navigate(['/cars', car.id]);
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  countTotalCost() : void {
    this.totalCost = this.cars
    .map( car => car.cost)
    .reduce( (prev, next) => prev + next);
  }

  onShowGross(grossCost: number): void {
    this.grossCost = grossCost;
  }
}
