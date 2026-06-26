import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us-section/about-us-component/about-us-component';
import { HeroSectionComponent } from '../hero-section/hero-section-component/hero-section-component';
import { PracticeAreaComponent } from '../practice-area/practice-area-component/practice-area-component';
import { PhotoComponenet } from '../Gallery/Photo/photo-componenet/photo-componenet';
import { VideoComponenet } from '../Gallery/Video/video-componenet/video-componenet';
import { TeamMemeberComponenet } from '../Pages/Team-Member/team-memeber-componenet/team-memeber-componenet';
import { AchievementComponenet } from '../Pages/Achievement/achievement-componenet/achievement-componenet';
import { VissionComponenet } from '../Pages/Vission/vission-componenet/vission-componenet';
import { RewardsComponenet } from '../Pages/Rewards/rewards-componenet/rewards-componenet';
import { ServicesComponenet } from '../Pages/Services/services-componenet/services-componenet';
import{ContactUsComponent} from '../Contact-Us/contact-us-component/contact-us-component'
import { TestimonialComponenet } from '../Pages/Testimonial/testimonial-componenet/testimonial-componenet';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  imports: [AboutUsComponent,HeroSectionComponent,PracticeAreaComponent,PhotoComponenet,VideoComponenet,TeamMemeberComponenet,
  AchievementComponenet,VissionComponenet,RewardsComponenet,ServicesComponenet,
  ContactUsComponent,TestimonialComponenet,RouterLink

  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
