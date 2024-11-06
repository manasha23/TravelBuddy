import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { IBooking } from './booking.model';



@Injectable({
  providedIn: 'root',
})
export class BookingObsService {
  private bookingUrl = '../api/booking.json'; 
  private bookingSubject = new BehaviorSubject<IBooking[]>([]);
  bookings$=this.bookingSubject.asObservable();
  constructor(private http: HttpClient) {
    this.loadbookings();
  }

  private loadbookings() {
    this.http.get<IBooking[]>(this.bookingUrl).subscribe(
      (cities: IBooking[]) => {
        this.bookingSubject.next(cities);
      },
      error => console.error('Failed to load initial cities:', error)
    );
  }

  
  getBooking(): Observable<IBooking[]> {
    return this.http.get<IBooking[]>(this.bookingUrl);
  }
}
