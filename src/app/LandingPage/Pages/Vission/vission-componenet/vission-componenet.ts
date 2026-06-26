import { Component } from '@angular/core';

@Component({
  selector: 'app-vission-componenet',
  imports: [],
  templateUrl: './vission-componenet.html',
  styleUrl: './vission-componenet.scss',
})
export class VissionComponenet {

    sections = [
    {
      title: 'Vision',
      image: 'assets/Images/ideas-progress-vision-inspiration-design-concept.jpg',
      imageLeft: true,
      paragraphs: [
        'Our vision is to become a trusted legal partner for individuals, families, and businesses by providing transparent, reliable, and client-focused legal services.',
        'We strive to simplify legal complexities and deliver practical solutions that protect our clients rights while building long-term trust and confidence.'
      ]
    },
    {
      title: 'Vision & Mission',
      image: 'assets/Images/vision-mission-inspiration-word.jpg',
      imageLeft: false,
      paragraphs: [
        'Our mission is to provide effective legal representation with integrity, professionalism, and dedication.',
        'We aim to empower our clients through expert legal guidance, personalized attention, and strategic solutions tailored to their unique circumstances.'
      ]
    }
  ];
}
