import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl:'./product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  product={
    name:'ipohone x',
    price:755,
    color:'Black',
    discount: 8.5,
    inStock:10,
    pImage: '/assets/R.png'

  }
  getDiscountedPrice(){
    return this.product.price - (this.product.price *this.product.discount/100)

  }

}
