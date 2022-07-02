import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDeliveryComponent } from './check-delivery.component';

describe('CheckDeliveryComponent', () => {
  let component: CheckDeliveryComponent;
  let fixture: ComponentFixture<CheckDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
