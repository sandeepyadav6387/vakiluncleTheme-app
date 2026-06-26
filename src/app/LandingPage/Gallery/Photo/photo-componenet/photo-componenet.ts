import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-componenet',
  imports: [],
  templateUrl: './photo-componenet.html',
  styleUrl: './photo-componenet.scss',
})
export class PhotoComponenet {
   photos = [
    'assets/Images/mainimage2.jfif',
    'assets/Images/photo1.avif',
    'assets/Images/mainimage2.jfif',
    'assets/Images/photo2.avif',
    'assets/Images/mainimage2.jfif',
    'assets/Images/photo1.avif',
    'assets/Images/mainimage2.jfif',
    'assets/Images/photo2.avif',
    'assets/Images/mainimage2.jfif'
  ];
}
