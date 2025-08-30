import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantHeader } from './restaurant-header';

describe('RestaurantHeader', () => {
  let component: RestaurantHeader;
  let fixture: ComponentFixture<RestaurantHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
