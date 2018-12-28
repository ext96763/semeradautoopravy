import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepairsComponent } from './user-repairs.component';

describe('UserRepairsComponent', () => {
  let component: UserRepairsComponent;
  let fixture: ComponentFixture<UserRepairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRepairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
