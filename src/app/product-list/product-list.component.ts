import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl:'./product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  //name="jon deo";
//   addToCart:number=0;
//   product={
//     name:'ipohone x',
//     price:755,
//     color:'Black',
//     discount: 8.5,
//     inStock:10,
//     pImage: '/assets/R.png'

//   }
//   getDiscountedPrice(){
//     return this.product.price - (this.product.price *this.product.discount/100)

//   }
 

// onNameChange(){
//   //this.name ='steve'

// }
// decrementCartValue(){
//   if(this.addToCart > 0){
//     this.addToCart--;
//   }
// }
// incerementCartValue(){
// this.addToCart++;
// }
listOfString:string[]=['mark','steve','john']
}