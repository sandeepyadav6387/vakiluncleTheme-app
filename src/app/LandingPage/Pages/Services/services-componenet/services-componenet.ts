import { Component } from '@angular/core';
import{ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-services-componenet',
  imports: [ButtonModule],
  templateUrl: './services-componenet.html',
  styleUrl: './services-componenet.scss',
})
export class ServicesComponenet {


  services = [
  {
    icon: 'pi pi-shield',
    title: 'Criminal Defense',
    description:
      'Strong legal representation for criminal cases, bail matters, and defense strategies.'
  },
  {
    icon: 'pi pi-home',
    title: 'Property Disputes',
    description:
      'Expert assistance in property ownership, land disputes, and real estate litigation.'
  },
  {
    icon: 'pi pi-users',
    title: 'Family Law',
    description:
      'Legal support for divorce, child custody, maintenance, and family-related matters.'
  },
  {
    icon: 'pi pi-briefcase',
    title: 'Corporate Law',
    description:
      'Business legal services including contracts, compliance, and company disputes.'
  },
  {
    icon: 'pi pi-file-edit',
    title: 'Civil Litigation',
    description:
      'Professional representation in civil disputes, claims, and court proceedings.'
  },
  {
    icon: 'pi pi-building-columns',
    title: 'Legal Consultation',
    description:
      'Personalized legal advice to help clients make informed decisions and protect their rights.'
  }
];
}
