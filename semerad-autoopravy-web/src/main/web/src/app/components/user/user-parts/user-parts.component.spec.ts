import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPartsComponent } from './user-parts.component';

describe('UserPartsComponent', () => {
  let component: UserPartsComponent;
  let fixture: ComponentFixture<UserPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
