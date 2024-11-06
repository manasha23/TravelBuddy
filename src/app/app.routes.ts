import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingEditComponent } from './booking-edit/booking-edit.component';
import { RegisterComponent } from './register/register.component';
import { BookingCreateComponent } from './booking-create/booking-create.component';

export const routes: Routes = [
    
 
    {
        path:'home',
        component:HomeComponent
    },
 
    {
        path:'about',
        component:AboutComponent
    },
   
    {
        path:'booking',
        component:BookingComponent
    },
    {
        path:'bookingdetails/:tourID',
        component:BookingDetailsComponent
    },
    {
        path:'bookingdetails/:tourID/edit',
        component:BookingEditComponent
    },
    {
        path: 'register',
        component:RegisterComponent
    },
    { 
        path: 'booking/create', 
        component: BookingCreateComponent 
    },

    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    
    {
        path:'**',
        component:HomeComponent
    },
 
 
];
