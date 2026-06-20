import { Component } from '@angular/core';

@Component({
  selector: 'app-video-componenet',
  imports: [],
  templateUrl: './video-componenet.html',
  styleUrl: './video-componenet.scss',
})
export class VideoComponenet {
    videos = [
    {
      thumbnail: 'assets/Images/about-image.png',
      url: 'https://www.youtube.com/watch?v=example1'
    },
    {
      thumbnail: 'assets/Images/hero1-main-img2.png',
      url: 'https://www.youtube.com/watch?v=example2'
    },
     {
      thumbnail: 'assets/Images/hero1-main-img2.png',
      url: 'https://www.youtube.com/watch?v=example2'
    },
   
      ];
}
