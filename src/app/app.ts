import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './LandingPage/Header/header-component/header-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Theme 01');
   @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    
    
    if (!target || typeof target.closest !== 'function') {
      return;
    }
    
    const anchor = target.closest('a');
    
    if (anchor) {
      const href = anchor.getAttribute('href');
      
      
      if (href && href.startsWith('#')) {
        event.preventDefault(); 
        
        if (href.length > 1) {
          const id = href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  }

}
