import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
 
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { IncomeTaxComponent } from './total-cost/income-tax/income-tax.component';
import { CarResolve } from './car-resolve.service';
import { CostSharedService } from './cost-shared.service';



@NgModule({
  declarations: [
    CarsListComponent,
    TotalCostComponent,
    CarDetailsComponent,
    IncomeTaxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CarsListComponent
  ],
  providers: [
    CarResolve,
    CostSharedService
  ]
})
export class CarsModule { }
