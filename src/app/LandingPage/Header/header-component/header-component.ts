import { Component, signal, HostListener } from '@angular/core';
import { RouterLink,} from '@angular/router';
import { ButtonModule } from 'primeng/button';

interface DropdownItem {
  name: string;
  route: string;
  fragment?: string;
}

interface NavItem {
  label: string;
  link?: string;
  dropdown?: DropdownItem[];
  fragment?: string;
}

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent {

  isMobileMenuOpen = signal(false);

  activeDropdown = signal<string | null>(null);

  navItems: NavItem[] = [
    { label: 'Home', link: '/', fragment: '' },

    { label: 'About Us', link: '/', fragment: 'about-us' },

    { label: 'Practice Areas', link: '/', fragment: 'practice-areas' },

    {
      label: 'Gallery',
      dropdown: [
        { name: 'Photo Gallery', route: '/', fragment: 'photo-gallery' },
        { name: 'Video Gallery', route: '/', fragment: 'video-gallery' }
      ]
    },

    {
      label: 'Pages',
      dropdown: [
        { name: 'Team Members', route: '/', fragment: 'team-members' },
        { name: 'Testimonials', route: '/', fragment: 'testimonials' },
        { name: 'Achievements', route: '/', fragment: 'achievements' },
        { name: 'Vision & Mission', route: '/', fragment: 'vission' },
        { name: 'Rewards', route: '/', fragment: 'rewards' },
        { name: 'Services', route: '/', fragment: 'services' }
      ]
    },

    { label: 'Contact Us', link: '/', fragment: 'contact-us' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  toggleDropdown(label: string, event: Event) {
    event.stopPropagation();

    this.activeDropdown.set(
      this.activeDropdown() === label ? null : label
    );
  }

  @HostListener('document:click')
  closeDropdown() {
    this.activeDropdown.set(null);
  }
}