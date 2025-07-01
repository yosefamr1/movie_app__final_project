import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mooviecard } from './mooviecard';

describe('Mooviecard', () => {
  let component: Mooviecard;
  let fixture: ComponentFixture<Mooviecard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mooviecard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mooviecard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
