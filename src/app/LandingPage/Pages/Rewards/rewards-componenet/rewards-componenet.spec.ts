import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsComponenet } from './rewards-componenet';

describe('RewardsComponenet', () => {
  let component: RewardsComponenet;
  let fixture: ComponentFixture<RewardsComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardsComponenet],
    }).compileComponents();

    fixture = TestBed.createComponent(RewardsComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
