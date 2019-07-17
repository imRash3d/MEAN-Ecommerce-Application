import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Cart } from "src/app/shared-data/models/cart.model";

@Component({
  selector: "app-cart-view-toggle",
  templateUrl: "./cart-view-toggle.component.html",
  styleUrls: ["./cart-view-toggle.component.scss"]
})
export class CartViewToggleComponent implements OnInit, OnChanges {
  @Input() cartItems: Cart[] = [];
  totalPrice: number = 0;
  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    if (this.cartItems.length) {
      this.cartItems.forEach(_item => {
        this.totalPrice += _item.quantity;
      });
    }
  }
}
