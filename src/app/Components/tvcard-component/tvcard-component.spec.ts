import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvcardComponent } from './tvcard-component';

describe('TvcardComponent', () => {
  let component: TvcardComponent;
  let fixture: ComponentFixture<TvcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
