import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ShowReviewsComponent } from './show-reviews/show-reviews.component';
import { PostReviewComponent } from './post-review/post-review.component';
import { ReviewByMovieComponent } from './review-by-movie/review-by-movie.component';
import { ShowReviewsByMovieComponent } from './show-reviews-by-movie/show-reviews-by-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowReviewsComponent,
    PostReviewComponent,
    ReviewByMovieComponent,
    ShowReviewsByMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
