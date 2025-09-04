import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-reviews-by-movie',
  templateUrl: './show-reviews-by-movie.component.html',
  styleUrls: ['./show-reviews-by-movie.component.css']
})
export class ShowReviewsByMovieComponent {
  movieData:any;
  movieName:string='';
  constructor(private httpclient:HttpClient,private route:ActivatedRoute){

  }
  ngOnInit(){
    this.movieName = this.route.snapshot.paramMap.get('movie')|| '';
    this.httpclient.get(`http://localhost:3000/viewReviewsByMovies/${this.movieName}`)
    .subscribe((data:any)=>{
      this.movieData=data;
      console.log(`PARTICULAR ${this.movieName} REVIEWS RECEIVED: ${this.movieData}`);
    })
  }
}
