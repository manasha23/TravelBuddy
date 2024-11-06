import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../booking/booking.services';
import { IBooking } from '../booking/booking.model';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  id: number | undefined;
  booking: IBooking | undefined;

  //Dependency Injection
  constructor(private router: Router, private route: ActivatedRoute,
  private bookService:BookingService) {

  }

  ngOnInit(): void {
   
    //this.id = +this.route.snapshot.params['tourID'];
    this.route.paramMap.subscribe((map)=>{
      this.id = +map.get('tourID')!;
      this.booking=this.bookService.getBookingbyId(this.id)
    })
  }

  onBack(): void {
    this.router.navigate(['/booking']);
  }

  onEdit(): void {
    this.router.navigate(['/bookingdetails', this.id, 'edit']);
  }

  onNew(): void {
    this.router.navigate(['booking/create']);
  }
  
}
