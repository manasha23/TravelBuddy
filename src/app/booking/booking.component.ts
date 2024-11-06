import { Component,OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBooking } from './booking.model';
import { FormsModule } from '@angular/forms';  
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookingRatingComponent } from '../booking-rating/booking-rating.component';
import { BookingService } from './booking.services';
import { BookingObsService } from './booking-service-obs.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FontAwesomeModule,BookingRatingComponent],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, OnDestroy {
  
  searchTerm: string = ''; 
  
  bookings: IBooking[] = [];
 
  private subscription: Subscription = new Subscription();
  
  constructor(private _bookService:BookingService,private bookingObsService: BookingObsService  ){ }
  
  ngOnInit():void{
    this.subscription.add(
      this.bookingObsService.getBooking().subscribe((data: IBooking[])=>{
        this.bookings=data;
      }
    ))
    
    //this.bookings=this._bookService.getBooking();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  
 
  get filteredBookings() {
    return this.bookings.filter(booking =>
      booking.tourName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onRatingClicked(message: string): void {
    console.log(message);
    alert(message);  
  }
}
