import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-review-by-movie',
  templateUrl: './review-by-movie.component.html',
  styleUrls: ['./review-by-movie.component.css']
})
export class ReviewByMovieComponent {
  moviesData:any;
  constructor(private httpclient:HttpClient){

  }
  ngOnInit(){
    this.httpclient.get("http://localhost:3000/viewReviewsByMovies")
    .subscribe((data:any)=>{
      this.moviesData=data;
      console.log("Movies data received: "+ this.moviesData);
    })
  }
}
