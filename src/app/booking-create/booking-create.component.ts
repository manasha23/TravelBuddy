import { Component, OnInit } from '@angular/core';
import { IBooking } from '../booking/booking.model';
import { Router } from '@angular/router';
import { BookingService } from '../booking/booking.services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-create.component.html',
  styleUrls: ['./booking-create.component.css']
})
export class BookingCreateComponent implements OnInit {
  booking: IBooking = {
    tourID: 0,
    tourName: '',
    duration: '',
    price: 0,
    image: '',
    rating: 1,
    description: ''
  };

  imagePreview: string | ArrayBuffer | null = null;

  constructor(private router: Router, private bookingService: BookingService) {}

  ngOnInit(): void {
    this.setNextTourID();
  }

  setNextTourID(): void {
    const bookings = this.bookingService.getBooking();
    const maxID = Math.max(...bookings.map(booking => booking.tourID), 0);
    this.booking.tourID = maxID + 1;
  }

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.booking.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSave(): void {
    this.bookingService.addBooking(this.booking);
    alert("Booking created successfully");
    this.router.navigate(['/booking']);
  }
}

