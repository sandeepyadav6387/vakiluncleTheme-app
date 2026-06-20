import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemeberComponenet } from './team-memeber-componenet';

describe('TeamMemeberComponenet', () => {
  let component: TeamMemeberComponenet;
  let fixture: ComponentFixture<TeamMemeberComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMemeberComponenet],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamMemeberComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
