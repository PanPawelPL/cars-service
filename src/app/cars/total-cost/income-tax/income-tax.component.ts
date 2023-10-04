import { Component, OnDestroy, OnInit } from '@angular/core';
import { CostSharedService } from '../../cost-shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cs-income-tax',
  templateUrl: './income-tax.component.html'
})
export class IncomeTaxComponent implements OnInit, OnDestroy{
  private incomeTax: number = 18;
  income!: number;
  costSub!: Subscription;

  constructor(private costSharedService: CostSharedService) {}

  ngOnInit(): void {
    this.costSub = this.costSharedService.totalCostSource$.subscribe( (cost) => {
      this.income = cost * this.incomeTax / 100;
    });
  }

  ngOnDestroy(): void {
    if (this.costSub){
      this.costSub.unsubscribe();
    }
  }

}
