import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponenet } from './video-componenet';

describe('VideoComponenet', () => {
  let component: VideoComponenet;
  let fixture: ComponentFixture<VideoComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoComponenet],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
