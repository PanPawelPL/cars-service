import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
 
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { CarDetailsComponent } from './car-details/car-details.component';



@NgModule({
  declarations: [
    CarsListComponent,
    TotalCostComponent,
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CarsListComponent
  ]
})
export class CarsModule { }
