import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent {
  productsData:any;
  filteredData:any;
  selectedCat="";
  categories=[
    'Fruits & Vegetables',
    'Dairy & Bakery',
    'Meat & Frozen Foods',
    'Grains & Staples',
    'Snacks & Household',
  ]
  constructor(private http:HttpClient){
  }
  catChange(){
    if(this.selectedCat=="") this.filteredData=this.productsData;
    else{
      this.filteredData = this.productsData.filter((p:any)=>p.productCategory==this.selectedCat)
    }
  }
  ngOnInit(){
    this.http.get("http://localhost:3000/products").subscribe((data:any)=>{
      this.productsData=data;
      this.filteredData=this.productsData;
      console.log("Data from backend: ", this.productsData);
    });
  }

}
