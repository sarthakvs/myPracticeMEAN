import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewByMovieComponent } from './review-by-movie.component';

describe('ReviewByMovieComponent', () => {
  let component: ReviewByMovieComponent;
  let fixture: ComponentFixture<ReviewByMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewByMovieComponent]
    });
    fixture = TestBed.createComponent(ReviewByMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
