import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-testimonial-slider',
  imports: [CarouselModule],
  templateUrl: './testimonial-slider.html',
  styleUrl: './testimonial-slider.scss',
})
export class TestimonialSlider {


  iresponsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  testimonials = [
    {
      image: 'assets/Images/testimonial1.png',
      name: 'Cora Boyle',
      company: 'Huels Group',
      review: 'Working with Amanda Rodriguez was a game-changer for my case. Her attention to detail, strategic thinking, and unwavering dedication made all the difference.'
    },
    {
      image: 'assets/Images/testimonial2.png',
      name: 'Gustavo Hettinger',
      company: 'Ruecker LLC',
      review: 'Amanda Rodriguez is a force to be reckoned with in the courtroom. Her knowledge of the law and her ability to dissect complex evidence was truly remarkable.'
    },
    {
      image: 'assets/Images/testimonial3.png',
      name: 'Dewey Heaney DVM',
      company: 'Sporer - Lind',
      review: 'Working with Amanda Rodriguez was a game-changer for my case. Her attention to detail, strategic thinking, and unwavering dedication made all the difference.'
    }
  ];
}



