import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "src/app/shared-data/models/product.model";
import { ProductService } from "src/app/shared-data/services/product.service";

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
        this.products = response['data'];
      })
    );
  }
}
