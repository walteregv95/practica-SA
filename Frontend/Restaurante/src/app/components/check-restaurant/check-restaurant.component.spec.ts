import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRestaurantComponent } from './check-restaurant.component';

describe('CheckRestaurantComponent', () => {
  let component: CheckRestaurantComponent;
  let fixture: ComponentFixture<CheckRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
