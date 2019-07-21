import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { of, BehaviorSubject } from "rxjs";
import { Product } from "../models/product.model";
import { Cart } from "../models/cart.model";
@Injectable({
  providedIn: "root"
})
export class CartService {
  private CART_ID = "USER_CART";
  getCartItems = new BehaviorSubject(null);
  constructor() {
    const cartItems = this.getCartItemsFromStorage();
    this.getCartItems.next(cartItems);
  }

  addToCartProduct(product) {
    let cartItems = this.getCartItemsFromStorage();
    const cartObj = {
      product,
      quantity: 1
    };
    cartItems.push(cartObj);
    this.saveCartInLocalStorage(cartItems);
    return of({
      result: {
        success: true
      }
    });
  }

  deleteCartItems(productId) {
    let cartItems = this.getCartItemsFromStorage();
    cartItems = cartItems.filter(
      _cartProduct => _cartProduct.product._id !== productId
    );
    this.saveCartInLocalStorage(cartItems);
  }
  updateQuantity(type, product: Product) {
    const { cartObj, cartItems } = this.getSelectedCartObj(product._id);

    if (type === "plus") {
      cartObj.quantity++;
    } else {
      if (cartObj.quantity > 1) {
        cartObj.quantity--;
      }
    }
    //  console.log(cartObj , cartItems)
    this.saveCartInLocalStorage(cartItems);
  }

  saveCartInLocalStorage(cartItems) {
    localStorage.setItem(this.CART_ID, JSON.stringify(cartItems));
    this.getCartItems.next(cartItems);
  }
  getCartItemsFromStorage() {
    const cartItems = localStorage.getItem(this.CART_ID)
      ? JSON.parse(localStorage.getItem(this.CART_ID))
      : [];
    return cartItems;
  }

  itemExistIncart(productId) {
    let cartItems = this.getCartItemsFromStorage();
    const isExist = cartItems.findIndex(
      _cartProduct => _cartProduct.product._id === productId
    );
    return isExist;
  }
  updateCartDataByProductId(productId, product: Product) {
    let { cartObj, cartItems } = this.getSelectedCartObj(productId);
    if (cartObj) {
      product["_id"] = productId;
      cartObj.product = product;
      this.saveCartInLocalStorage(cartItems);
    }
  }

  getSelectedCartObj(productId) {
    let cartItems = [];
    cartItems = this.getCartItemsFromStorage();
    // this.getCartItems().subscribe(response => {
    //   cartItems = response;
    // });
    const cartObj: Cart = cartItems.find(
      _cartProduct => _cartProduct.product._id === productId
    );
    return { cartObj, cartItems };
  }
}
