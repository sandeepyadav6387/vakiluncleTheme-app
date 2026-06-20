import { Component } from '@angular/core';
import { HeaderComponent } from '../Header/header-component/header-component';
import { FooterComponent } from '../Footer/footer-component/footer-component';
import { AboutUsComponent } from '../about-us-section/about-us-component/about-us-component';
import { HeroSectionComponent } from '../hero-section/hero-section-component/hero-section-component';
import { PracticeAreaComponent } from '../practice-area/practice-area-component/practice-area-component';
import { TestimonialSlider } from '../testimonial-slider/testimonial-slider';
@Component({
  selector: 'app-landing-page',
  imports: [HeaderComponent,FooterComponent,AboutUsComponent,HeroSectionComponent,PracticeAreaComponent,
  TestimonialSlider

  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
