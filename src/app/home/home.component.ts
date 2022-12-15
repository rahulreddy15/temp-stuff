import { Component } from '@angular/core';
import { mock_product_list } from '../mock-product-list';
import { ProductItemMode1 } from '../product-item-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {

  products:ProductItemMode1[] = []
  constructor(){
    for(var x of mock_product_list){
      console.log(x)
      this.products.push(x)
    }
  }
}
