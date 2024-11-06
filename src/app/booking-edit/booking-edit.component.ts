import { Component } from '@angular/core';
import { IBooking } from '../booking/booking.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking/booking.services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-booking-edit',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './booking-edit.component.html',
  styleUrl: './booking-edit.component.css'
})
export class BookingEditComponent {
  id: number | undefined;
  booking: IBooking ;

  //Dependency Injection
  constructor(
  private router: Router, private route: ActivatedRoute,
  private bookService:BookingService) {

  }

  imagePreview: string | ArrayBuffer | null = null;

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result; // Set preview for display
        this.booking.image = reader.result as string; // Store image data as base64
      };
      reader.readAsDataURL(file); // Convert file to base64 URL
    }
  }

  ngOnInit(): void {
   
    //this.id = +this.route.snapshot.params['tourID'];
    this.route.paramMap.subscribe((map)=>{
      this.id = +map.get('tourID')!;
      
      this.booking=this.bookService.getBookingbyId(this.id)
    })
  }

  onSave(){
    this.bookService.updateBooking(this.booking);
    alert("Saved successfully")
    this.router.navigate(['/booking']);

  }
  
}
