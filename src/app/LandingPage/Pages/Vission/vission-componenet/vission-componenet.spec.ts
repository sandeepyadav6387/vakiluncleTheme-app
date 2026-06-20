import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VissionComponenet } from './vission-componenet';

describe('VissionComponenet', () => {
  let component: VissionComponenet;
  let fixture: ComponentFixture<VissionComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VissionComponenet],
    }).compileComponents();

    fixture = TestBed.createComponent(VissionComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
