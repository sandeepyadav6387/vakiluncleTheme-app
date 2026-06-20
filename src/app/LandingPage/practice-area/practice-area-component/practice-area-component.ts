import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-practice-area-component',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './practice-area-component.html',
  styleUrl: './practice-area-component.scss',
})
export class PracticeAreaComponent {

  practiceAreas = [
    {
      icon: 'pi pi-shield',
      title: 'DUI/DWI Defense',
      description: 'Being charged with a DUI or DWI can have serious consequences.'
    },
    {
      icon: 'pi pi-briefcase',
      title: 'Drug Crimes',
      description: 'Whether possession, trafficking or distribution charges.'
    },
    {
      icon: 'pi pi-building',
      title: 'Assault and Violent Crimes',
      description: 'Aggressive legal defense against violent crime accusations.'
    },
    {
      icon: 'pi pi-file-edit',
      title: 'White Collar Crimes',
      description: 'Defense for fraud and financial crimes.'
    },
    {
      icon: 'pi pi-users',
      title: 'Domestic Violence',
      description: 'Compassionate representation for domestic violence matters.'
    },
    {
      icon: 'pi pi-lock',
      title: 'Sexual Assault',
      description: 'Experienced legal support for sensitive allegations.'
    }
  ];

}