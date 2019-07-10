import { Component, OnInit } from "@angular/core";
import { ProductService } from "../shared-data/services/product.service";
import { Subscription } from "rxjs";
import { Product } from "../shared-data/models/product.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  private subscriptionList: Subscription[] = [];
  products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.subscriptionList.push(
      this.productService.getProducts().subscribe(response => {
        this.products = response;
      })
    );
  }
}
