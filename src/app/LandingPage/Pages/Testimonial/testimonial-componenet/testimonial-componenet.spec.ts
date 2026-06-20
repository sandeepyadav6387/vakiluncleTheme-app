import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialComponenet } from './testimonial-componenet';

describe('TestimonialComponenet', () => {
  let component: TestimonialComponenet;
  let fixture: ComponentFixture<TestimonialComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialComponenet],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
