import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchcardComponent } from './watchcard-component';

describe('WatchcardComponent', () => {
  let component: WatchcardComponent;
  let fixture: ComponentFixture<WatchcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
