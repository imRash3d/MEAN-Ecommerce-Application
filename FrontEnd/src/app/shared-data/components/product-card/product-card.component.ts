import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../models/product.model";
import { Router } from "@angular/router";
import { CartService } from "../../services/cart.service";
import { CommonService } from "../../services/common.service";
import { Cart } from "../../models/cart.model";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() quantity: number;
  @Input() isCartProduct:boolean;
  constructor(
    private cartService: CartService,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.cartService.getCartItems.subscribe(response => {
      if (response) {
        const cartItems = response;
        const cartObj: Cart = cartItems.find(
          _cartProduct => _cartProduct.product._id === this.product._id
        );
        this.quantity = cartObj ? cartObj.quantity : null;
      }
    });
  }

  navigateToDetails() {
    this.router.navigate(["products", "detail", this.product._id]);
  }

  addToCart() {
    this.cartService.addToCartProduct(this.product).subscribe(response => {
      if (response.result.success) {
        this.commonService.showMessage("success", "Item added to cart");
      } else {
        this.commonService.showMessage("error", "Item cant not be  added");
      }
    });
  }

  updateCart(type: string) {
    this.cartService.updateQuantity(type, this.product);
  }
  deleteCart() {
    this.cartService.deleteCartItems(this.product._id);
  }
}
