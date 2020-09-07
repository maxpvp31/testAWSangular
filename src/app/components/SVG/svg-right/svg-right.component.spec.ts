import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgRightComponent } from './svg-right.component';

describe('SvgRightComponent', () => {
  let component: SvgRightComponent;
  let fixture: ComponentFixture<SvgRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
