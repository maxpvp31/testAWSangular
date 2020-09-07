import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLeftComponent } from './svg-left.component';

describe('SvgLeftComponent', () => {
  let component: SvgLeftComponent;
  let fixture: ComponentFixture<SvgLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
