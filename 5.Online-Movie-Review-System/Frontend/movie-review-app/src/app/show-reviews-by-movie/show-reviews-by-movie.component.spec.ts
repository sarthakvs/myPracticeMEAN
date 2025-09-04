import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReviewsByMovieComponent } from './show-reviews-by-movie.component';

describe('ShowReviewsByMovieComponent', () => {
  let component: ShowReviewsByMovieComponent;
  let fixture: ComponentFixture<ShowReviewsByMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowReviewsByMovieComponent]
    });
    fixture = TestBed.createComponent(ShowReviewsByMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
