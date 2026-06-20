import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponenet } from './photo-componenet';

describe('PhotoComponenet', () => {
  let component: PhotoComponenet;
  let fixture: ComponentFixture<PhotoComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoComponenet],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
