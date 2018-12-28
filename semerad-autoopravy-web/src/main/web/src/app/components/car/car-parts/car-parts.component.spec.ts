import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPartsComponent } from './car-parts.component';

describe('CarPartsComponent', () => {
  let component: CarPartsComponent;
  let fixture: ComponentFixture<CarPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
