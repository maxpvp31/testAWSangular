import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceColumnComponent } from './price-column.component';

describe('PriceColumnComponent', () => {
  let component: PriceColumnComponent;
  let fixture: ComponentFixture<PriceColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
