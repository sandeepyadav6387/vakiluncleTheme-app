import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementComponenet } from './achievement-componenet';

describe('AchievementComponenet', () => {
  let component: AchievementComponenet;
  let fixture: ComponentFixture<AchievementComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementComponenet],
    }).compileComponents();

    fixture = TestBed.createComponent(AchievementComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
