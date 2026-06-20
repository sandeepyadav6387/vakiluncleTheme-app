import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent {

  mobileMenuOpen = false;
  galleryOpen = false;
  pagesOpen = false;

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleGallery() {
    this.galleryOpen = !this.galleryOpen;
  }

  togglePages() {
    this.pagesOpen = !this.pagesOpen;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
    this.galleryOpen = false;
    this.pagesOpen = false;
  }
}