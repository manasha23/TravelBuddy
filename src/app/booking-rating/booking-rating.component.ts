// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faStar}
// @Component({
//   selector: 'app-booking-rating',
//   standalone: true,
//   imports: [CommonModule, FontAwesomeModule],
//   templateUrl: './booking-rating.component.html',
//   styleUrl: './booking-rating.component.css'
// })
// export class BookingRatingComponent {

// }

import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
 
@Component({
  selector: 'app-booking-rating',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './booking-rating.component.html',
  styleUrl: './booking-rating.component.css'
})
export class BookingRatingComponent {
 
  faStar=faStar;
 
  @Input() rating!: number;
  starWidth!: number;
  
  @Output() ratingClicked:EventEmitter<string> =new EventEmitter<string>();
  

  ngOnChanges():void{
    this.starWidth=this.rating * 90/5;
  }
 
  onClick():void{
    this.ratingClicked.emit(`The rating is ${this.rating}`);

  } 
}
 