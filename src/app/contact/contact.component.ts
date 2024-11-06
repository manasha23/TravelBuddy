import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { Contact } from './contact.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = new Contact();

  save(contactForm: NgForm) {
    console.log(contactForm.form);
  console.log(contactForm.valid);
  console.log("Saved info " + JSON.stringify(contactForm.value))

  if (contactForm.valid) {
    alert("Thank you! Your message has been submitted successfully.");
    contactForm.reset(); // Optionally reset the form after submission
  } else {
    alert("Please fill all required fields correctly.");
  }
  }
}
