import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent {
  categories=[
    'Fruits & Vegetables',
    'Dairy & Bakery',
    'Meat & Frozen Foods',
    'Grains & Staples',
    'Snacks & Household',
  ]
  constructor(private http:HttpClient){

  }
  add(formdata:any){
    this.http.post("http://localhost:3000/addProduct",formdata).subscribe((data:any)=>{
      alert("Order has been Added!");
    });
  }
}
