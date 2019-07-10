import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../models/product.model";
import { Router } from '@angular/router';

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToDetails() {
    this.router.navigate(['products', 'detail', this.product._id]);
  }
}
