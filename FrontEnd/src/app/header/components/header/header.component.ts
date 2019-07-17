import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/shared-data/services/cart.service";
import { Cart } from "src/app/shared-data/models/cart.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  cartItems: Cart[] = [];
  totalQuantity: number;
  toggleCartView: boolean;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems.subscribe(response => {
      this.cartItems = response;
      console.log(response);
      this.getTotalCartQty();
    });
  }

  getTotalCartQty() {
    this.totalQuantity = 0;
    this.cartItems.forEach(_cartProduct => {
      console.log(_cartProduct.quantity);
      this.totalQuantity += Number(_cartProduct.quantity);
    });

    console.log(this.totalQuantity);
  }

  showCartView() {
    this.toggleCartView = this.totalQuantity > 0 ? !this.toggleCartView : false;
  }
}
