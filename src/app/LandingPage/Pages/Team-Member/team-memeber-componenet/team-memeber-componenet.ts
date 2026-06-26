import { Component } from '@angular/core';

@Component({
  selector: 'app-team-memeber-componenet',
  imports: [],
  templateUrl: './team-memeber-componenet.html',
  styleUrl: './team-memeber-componenet.scss',
})
export class TeamMemeberComponenet {


  teamMembers = [
    {
      name: 'Adman Michel',
      role: 'Senior Attorneys',
      image: 'assets/Images/team2-img1.png'
    },
    {
      name: 'Miss Rafael Daniel',
      role: 'Tax Analysis',
      image: 'assets/Images/team2-img2.png'
    },
    {
      name: 'Patty Lindgren',
      role: 'Research Specialist',
      image: 'assets/Images/team2-img2.png'
    },
    {
      name: 'Kathy Wilkinson Sr.',
      role: 'Consultant',
      image: 'assets/Images/team2-img2.png'
    },
    {
      name: 'Willie Zieme',
      role: 'Lawyer',
      image: 'assets/Images/team2-img2.png'
    },
    {
      name: 'Darnell Schumm I',
      role: 'Visa Lawyer',
      image: 'assets/Images/team2-img2.png'
    },
   
    {
      name: 'Brittany Fahey MD.',
      role: 'Senior Lawyer',
      image: 'assets/Images/team2-img3.png'
    },
    {
      name: 'Tyrone Zboncak',
      role: 'Junior Advocate',
      image: 'assets/Images/team2-img4.png'
}
  ]
}
