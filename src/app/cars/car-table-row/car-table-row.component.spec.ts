import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTableRowComponent } from './car-table-row.component';

describe('CarTableRowComponent', () => {
  let component: CarTableRowComponent;
  let fixture: ComponentFixture<CarTableRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarTableRowComponent]
    });
    fixture = TestBed.createComponent(CarTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
