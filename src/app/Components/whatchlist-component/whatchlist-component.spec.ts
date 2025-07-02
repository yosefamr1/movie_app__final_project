import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatchlistComponent } from './whatchlist-component';

describe('WhatchlistComponent', () => {
  let component: WhatchlistComponent;
  let fixture: ComponentFixture<WhatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatchlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
