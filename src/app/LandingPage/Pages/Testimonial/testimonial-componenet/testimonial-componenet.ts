import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
@Component({
  selector: 'app-testimonial-componenet',
  imports: [PaginatorModule],
  templateUrl: './testimonial-componenet.html',
  styleUrl: './testimonial-componenet.scss',
})
export class TestimonialComponenet {
   testimonials = Array(12).fill({
    image: '/assets/Images/testimonial1.png',
    name: 'Jane Doe',
    date: '21 April 2024',
    review:
      'We consider lawflex not just as our legal counsel but as a trusted partner in our business journey. Their attention to detail, responsiveness, and ability to simplify complex legal matters have been invaluable.'
  });
}
