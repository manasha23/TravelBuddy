import { Injectable } from "@angular/core";
import { IBooking } from "./booking.model";

@Injectable({
    providedIn:'root'
})

export class BookingService{
    private bookings:IBooking[]=[     
      {
        tourID: 1,
        tourName: "Venice",
        duration: "7 Days",
        price: 3500,
        image: "assets/venice.jpg",
        rating: 3.5,
        description: "Explore the canals and iconic architecture of Venice, Italy’s romantic floating city. Enjoy gondola rides, and stroll through the bustling Piazza San Marco. Visit historic landmarks, including the Doge’s Palace and St. Mark's Basilica, and experience the unique charm of Venice's neighborhoods."
      },
      {
        tourID: 2,
        tourName: "Paris",
        duration: "5 Days",
        price: 2000,
        image: "assets/paris.jpg",
        rating: 4.0,
        description: "Discover the beauty and elegance of Paris, the City of Light. This tour includes visits to the Eiffel Tower, the grand halls of the Louvre, and a scenic cruise along the River Seine. Wander through charming neighborhoods like Montmartre and indulge in world-class French cuisine."
      },
      {
        tourID: 3,
        tourName: "Moscow",
        duration: "8 Days",
        price: 3500,
        image: "assets/moscow.jpg",
        rating: 3.5,
        description: "Step into the rich history and vibrant culture of Moscow, Russia’s capital city. Witness the grandeur of the Kremlin, marvel at the colorful domes of Saint Basil’s Cathedral, and experience Red Square’s historic atmosphere. This tour captures Moscow’s blend of historic landmarks and modern charm."
      },
      {
        tourID: 4,
        tourName: "Egypt",
        duration: "10 Days",
        price: 4000,
        image: "assets/egypt.jpg",
        rating: 5.0,
        description: "Travel back to ancient times with a tour of Egypt’s most remarkable sites. See the Pyramids of Giza, the enigmatic Sphinx, and explore temples along the Nile River. This immersive journey offers a unique glimpse into the world of pharaohs and timeless treasures."
      },
      {
        tourID: 5,
        tourName: "Spain",
        duration: "12 Days",
        price: 4500,
        image: "assets/spain.jpg",
        rating: 4.5,
        description: "Experience Spain’s diverse landscapes and vibrant culture on this expansive tour. Visit Barcelona's stunning architecture, Madrid's royal splendor, and relax on the beautiful beaches of Costa Brava. Enjoy flamenco shows, Spanish cuisine, and the Mediterranean lifestyle at its finest."
      },
      {
        tourID: 6,
        tourName: "Japan",
        duration: "8 Days",
        price: 3800,
        image: "assets/japan.jpg",
        rating: 2.6,
        description: "Explore Japan’s harmony of tradition and innovation with visits to Tokyo, Kyoto, and Mount Fuji. Marvel at ancient temples, bustling cityscapes, and peaceful Zen gardens. This tour is ideal for experiencing Japan’s unique blend of rich history and cutting-edge culture."
      },
      {
        tourID: 7,
        tourName: "Australia",
        duration: "15 Days",
        price: 5000,
        image: "assets/australia.jpg",
        rating: 4.4,
        description: "Discover Australia’s natural wonders and iconic cities, from Sydney’s harbor to Melbourne’s artsy charm. Dive into the Great Barrier Reef, traverse the Outback, and explore tropical rainforests. This tour captures Australia’s incredible biodiversity and cosmopolitan energy."
      },
      {
        tourID: 8,
        tourName: "South Africa",
        duration: "9 Days",
        price: 4200,
        image: "assets/southafrica.jpg",
        rating: 1.5,
        description: "Experience South Africa’s stunning landscapes and wildlife on this unforgettable journey. Embark on a safari in Kruger National Park, and enjoy breathtaking views from Table Mountain in Cape Town. Learn about South Africa’s diverse cultures and explore its beautiful coastline."
      },
      {
        tourID: 9,
        tourName: "New Zealand",
        duration: "7 Days",
        price: 3700,
        image: "assets/newzealand.jpg",
        rating: 3.5,
        description: "Experience the dramatic landscapes of New Zealand, from majestic fjords to lush forests. Explore the renowned Milford Sound, the geothermal wonders of Rotorua, and the rolling hills of Hobbiton. Perfect for nature lovers, this tour combines adventure with scenic beauty."
      },
      {
        tourID: 10,
        tourName: "Canada",
        duration: "10 Days",
        price: 4600,
        image: "assets/canada.jpg",
        rating: 2.5,
        description: "Explore Canada’s expansive wilderness and vibrant cities. Visit Banff National Park, marvel at Niagara Falls, and experience the multicultural vibes of Toronto and Vancouver. This tour offers a balance of urban exploration and breathtaking natural sights."
      },
      {
        tourID: 11,
        tourName: "Greece",
        duration: "7 Days",
        price: 3300,
        image: "assets/greece.jpg",
        rating: 3.7,
        description: "Uncover Greece’s ancient history and serene islands on this enchanting tour. Walk among the ruins in Athens, relax on Santorini’s beaches, and explore the vibrant island of Mykonos. This trip offers a perfect mix of history, relaxation, and stunning scenery."
      },
      {
        tourID: 12,
        tourName: "Iceland",
        duration: "8 Days",
        price: 4100,
        image: "assets/iceland.jpg",
        rating: 4.0,
        description: "Experience Iceland’s unique and rugged beauty, from the geothermal Blue Lagoon to dramatic geysers and waterfalls. Chase the northern lights and explore Iceland’s vibrant capital, Reykjavik. Ideal for adventurers, this tour offers breathtaking natural sights and Icelandic culture."
      }
      
        ]
        getBooking(){
            return this.bookings;
        }

        getBookingbyId(id:number){
          const booking=this.bookings.find(
            booking=>booking.tourID === id
          )
          return booking
        }

        
        updateBooking(booking: IBooking) {
          const bookingidx = this.bookings.findIndex(x => x.tourID === booking.tourID);
          if (bookingidx >= 0) {
            this.bookings[bookingidx] = booking;
          }
        }

        addBooking(newBooking: IBooking): void {
          this.bookings.push(newBooking); // Assuming `bookings` is an array of bookings
        }
        
        
}