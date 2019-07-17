import { Component, OnInit } from "@angular/core";
import { CartService } from "../shared-data/services/cart.service";
import { Cart } from "../shared-data/models/cart.model";

@Component({
  selector: "app-my-cart",
  templateUrl: "./my-cart.component.html",
  styleUrls: ["./my-cart.component.scss"]
})
export class MyCartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cartItems: Cart[] = [];
  ngOnInit() {
    this.getCartItems();
  }
  getCartItems() {
    this.cartService.getCartItems.subscribe(response => {
      this.cartItems = response;
      console.log(this.cartItems);
      // this.getTotalCartQty();
    });
  }
}
