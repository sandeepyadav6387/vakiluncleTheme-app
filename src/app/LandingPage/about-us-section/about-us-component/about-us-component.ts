import { Component } from '@angular/core';
import { TeamMemeberComponenet } from '../../Pages/Team-Member/team-memeber-componenet/team-memeber-componenet';
import { TestimonialSlider } from '../../testimonial-slider/testimonial-slider';
@Component({
  selector: 'app-about-us-component',
  imports: [TeamMemeberComponenet,TestimonialSlider],
  templateUrl: './about-us-component.html',
  styleUrl: './about-us-component.scss',
})
export class AboutUsComponent {}
