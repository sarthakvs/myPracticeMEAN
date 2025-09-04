import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-reviews',
  templateUrl: './show-reviews.component.html',
  styleUrls: ['./show-reviews.component.css']
})
export class ShowReviewsComponent {
  reviewsData:any;
  constructor(private httpclient:HttpClient){
  }
  ngOnInit(){
    this.httpclient.get("http://localhost:3000/viewAllReviews")
    .subscribe((data:any) => {
      this.reviewsData = data;
      console.log("Data received: " + this.reviewsData);
    })
  }
}
