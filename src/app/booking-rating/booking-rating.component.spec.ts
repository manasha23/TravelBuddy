import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRatingComponent } from './booking-rating.component';

describe('BookingRatingComponent', () => {
  let component: BookingRatingComponent;
  let fixture: ComponentFixture<BookingRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
