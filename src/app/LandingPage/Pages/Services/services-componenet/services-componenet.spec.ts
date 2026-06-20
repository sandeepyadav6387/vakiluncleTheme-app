import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponenet } from './services-componenet';

describe('ServicesComponenet', () => {
  let component: ServicesComponenet;
  let fixture: ComponentFixture<ServicesComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesComponenet],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
