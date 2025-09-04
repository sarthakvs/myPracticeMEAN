import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowReviewsComponent } from './show-reviews/show-reviews.component';
import { PostReviewComponent } from './post-review/post-review.component';
import { ReviewByMovieComponent } from './review-by-movie/review-by-movie.component';
import { ShowReviewsByMovieComponent } from './show-reviews-by-movie/show-reviews-by-movie.component';

const routes: Routes = [
  {path:"",redirectTo:"/displayReviews",pathMatch:"full"},
  {path:"displayReviews",component:ShowReviewsComponent},
  {path:"postReview",component:PostReviewComponent},
  {path:"reviewsByMovie",component:ReviewByMovieComponent},
  {path:"displayReviews/:movie",component:ShowReviewsByMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
