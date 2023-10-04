import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cs-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalCostComponent implements OnChanges{

  @Input() totalCost!: number;
  @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();

  private VAT: number = 1.23;
  costThreshold: number = 10000;
  isCostTooLow: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.isCostTooLow = changes['totalCost'].currentValue < this.costThreshold;
  }

  showGross() : void {
    this.shownGross.emit(this.totalCost * this.VAT);
  }
}
