import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CostSharedService } from '../cost-shared.service';

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  
  @ViewChild('totalCostRef') totalCostRef!: TotalCostComponent;

  totalCost: number = 0;
  grossCost: number = 0;
  
  cars: Car[] = [];
  carForm!: FormGroup;

  constructor(
    private carsService: CarsService,
    private costSharedService: CostSharedService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.loadCars();
    this.carForm = this.buildCarForm();
  }

  ngAfterViewInit(): void {
    this.showGross();
  }


  buildCarForm(){
    return this.formBuilder.group({
      model: ['', Validators.required],
      type: '',
      plate: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      deliveryDate: '',
      deadline: '',
      color: '',
      power: '',
      clientFirstName: '',
      clientSurname: '',
      cost: '',
      isFullyDamaged: '',
      year: ''
    });
  }

  loadCars(): void {
    this.carsService.getCars().subscribe( cars => {
      this.cars = cars;
      this.countTotalCost();
      this.costSharedService.shareCost(this.totalCost);
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

  addCar(){
    this.carsService.addCar(this.carForm.value).subscribe( () => {
      this.loadCars();
    });
  }

  removeCar(car: Car, event: any){
    event.stopPropagation();
    this.carsService.removeCar(car.id).subscribe( () => {
      this.loadCars();
    });
  }
}
