import { Routes } from '@angular/router';
import { LandingPage } from './LandingPage/landing-page/landing-page';
import { AboutUsComponent } from './LandingPage/about-us-section/about-us-component/about-us-component';
import { PracticeAreaComponent } from './LandingPage/practice-area/practice-area-component/practice-area-component';
import { ContactUsComponent } from './LandingPage/Contact-Us/contact-us-component/contact-us-component';
import { PhotoComponenet } from './LandingPage/Gallery/Photo/photo-componenet/photo-componenet';
import { VideoComponenet } from './LandingPage/Gallery/Video/video-componenet/video-componenet';
import { TeamMemeberComponenet } from './LandingPage/Pages/Team-Member/team-memeber-componenet/team-memeber-componenet';
import { TestimonialComponenet } from './LandingPage/Pages/Testimonial/testimonial-componenet/testimonial-componenet';
import { AchievementComponenet } from './LandingPage/Pages/Achievement/achievement-componenet/achievement-componenet';
import { VissionComponenet } from './LandingPage/Pages/Vission/vission-componenet/vission-componenet';
import { RewardsComponenet } from './LandingPage/Pages/Rewards/rewards-componenet/rewards-componenet';
import { ServicesComponenet } from './LandingPage/Pages/Services/services-componenet/services-componenet';
import { Viewport } from './LandingPage/viewport/viewport';

export const routes: Routes = [
  {
    path: '', component: LandingPage
   
  }
];
