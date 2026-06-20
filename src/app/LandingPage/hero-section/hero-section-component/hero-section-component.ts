import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-hero-section-component',
  imports: [ButtonModule,CardModule],
  templateUrl: './hero-section-component.html',
  styleUrl: './hero-section-component.scss',
})
export class HeroSectionComponent {}
